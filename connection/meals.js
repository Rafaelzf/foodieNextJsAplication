//import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import { S3 } from "@aws-sdk/client-s3";

const s3 = new S3({
  region: "sa-east-1",
});

const db = sql("db/meals.db");

export async function getMeals() {
  await new Promise((r) => setTimeout(r, 4000));
  //throw new Error("Falha de conexão");
  return db.prepare("SELECT * FROM meals").all();
}

export async function getMeal(slug) {
  await new Promise((r) => setTimeout(r, 4000));
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function deleteItem(id) {
  return db.prepare(`DELETE FROM meals WHERE id = ${id}`).run();
}

export async function saveMeal(meal) {
  await new Promise((r) => setTimeout(r, 4000));
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const filename = `${meal.slug}${Math.random() * (1 - 10) + 1}.${extension}`;

  //const stream = fs.createWriteStream(`public/images/${filename}`);
  const bufferedImage = await meal.image.arrayBuffer();

  s3.putObject({
    Bucket: "rafaelfrancucci-nextjs-demo-users-image",
    Key: filename,
    Body: Buffer.from(bufferedImage),
    ContentType: meal.image.type,
  });

  // stream.write(Buffer.from(bufferedImage), (err) => {
  //   if (err) {
  //     throw "Save image failed! " + err.message;
  //   }
  // });

  meal.image = filename;

  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `
  ).run(meal);
}
