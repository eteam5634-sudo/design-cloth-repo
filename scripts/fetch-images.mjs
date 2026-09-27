import fs from "fs";
import path from "path";

const photos = {
  "hero.jpg": ["1469334031218-e382a71b716b", 2000],
  "promo.jpg": ["1509631179647-0177331693ae", 2000],
  "about.jpg": ["1558171813-4c088753af8f", 1800],
  "craft.jpg": ["1445205170230-053b83016050", 1600],
  "philosophy.jpg": ["1490481651871-ab68de25d43d", 1600],
  "vision.jpg": ["1441984904996-e0b6ba687e04", 2000],
  "cat-women.jpg": ["1529139574466-a303027c1d8b", 1800],
  "cat-men.jpg": ["1617137968427-85924c800a22", 1600],
  "cat-new.jpg": ["1485968579580-b6d095142e6e", 1600],
  "cat-accessories.jpg": ["1590874103328-eac38a683ce7", 2000],
  "look-autumn.jpg": ["1475180098004-ca77a66827be", 1600],
  "look-essential.jpg": ["1524504388940-b1c1722653e1", 1600],
  "look-evening.jpg": ["1566174053879-31528523f8ae", 1600],
  "look-modern.jpg": ["1487222477894-8943e31ef7b2", 1600],
  "journal-proportion.jpg": ["1551803091-e20673f15770", 1400],
  "journal-wardrobe.jpg": ["1525507119028-ed4c629a60a3", 1400],
  "journal-cloth.jpg": ["1492707892479-7bc8d5a4ee93", 1400],
  "noir-tailored-blazer.jpg": ["1591369822096-ffd140ec948f", 1200],
  "ivory-silk-dress.jpg": ["1515372039744-b8f02a3ae446", 1200],
  "classic-wool-coat.jpg": ["1539533018447-63fcce2678e3", 1200],
  "signature-linen-shirt.jpg": ["1603252109303-2751441dd157", 1200],
  "satin-evening-dress.jpg": ["1539008835657-9e8e9680c956", 1200],
  "oversized-blazer.jpg": ["1594633312681-425c7b97ccd1", 1200],
  "premium-cotton-shirt.jpg": ["1594938291221-94f18cbb5660", 1200],
  "leather-shoulder-bag.jpg": ["1548036328-c9fa89d128fa", 1200],
  "wide-leg-trousers.jpg": ["1506629082955-511b1aa562c8", 1200],
  "minimalist-sunglasses.jpg": ["1511499767150-a48a237f0083", 1200],
  "pleated-skirt.jpg": ["1583496661160-fb5886a0aaaa", 1200],
  "minimal-knit-dress.jpg": ["1434389677669-e08b4cac3105", 1200],
  "relaxed-trousers.jpg": ["1473966968600-fa801b869a1a", 1200],
  "premium-oxford-shirt.jpg": ["1593030761757-71fae45fa0e7", 1200],
  "structured-blazer.jpg": ["1507679799987-c73779587ccf", 1200],
  "leather-belt.jpg": ["1565251419287-9097aa7299ec", 1200],
};

const dir = path.join(process.cwd(), "public", "images");
await fs.promises.mkdir(dir, { recursive: true });

const entries = Object.entries(photos);
let failed = 0;

async function download([name, [id, width]]) {
  const url = `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=75&fm=jpg`;
  const res = await fetch(url, {
    redirect: "follow",
    signal: AbortSignal.timeout(45000),
    headers: {
      Accept: "image/jpeg",
      "User-Agent": "Mozilla/5.0",
    },
  });
  if (!res.ok) {
    console.error("FAIL", name, res.status);
    failed += 1;
    return;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  const jpeg = buf[0] === 0xff && buf[1] === 0xd8;
  if (!jpeg || buf.length < 8000) {
    console.error("FAIL", name, "invalid", buf.length, buf.subarray(0, 12).toString());
    failed += 1;
    return;
  }
  await fs.promises.writeFile(path.join(dir, name), buf);
  console.log("OK", name, buf.length);
}

const queue = [...entries];
const workers = Array.from({ length: 6 }, async () => {
  while (queue.length) {
    const item = queue.shift();
    if (!item) return;
    try {
      await download(item);
    } catch (error) {
      failed += 1;
      console.error("FAIL", item[0], error.message);
    }
  }
});

await Promise.all(workers);
if (failed) {
  console.error(`${failed} image(s) failed`);
  process.exit(1);
}
console.log("All images saved");
