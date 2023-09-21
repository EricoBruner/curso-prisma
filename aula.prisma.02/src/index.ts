/*
import db from "./database/database";

(async () => {
  const result = await db.query(`
    SELECT * FROM posts;
  `);

  const posts = result.rows;
  console.log("Posts encontrados no banco:", posts);
})();
*/

import prisma from "./database/database";

// o objeto prisma deve vir do database.ts

(async () => {
  const posts = await prisma.posts.findMany();
  console.log("Posts encontrados no banco:", posts);
})();
