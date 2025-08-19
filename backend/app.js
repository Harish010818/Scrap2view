import express from "express";
import cors from "cors";
import puppeteer from "puppeteer";
import puppeteerCore from "puppeteer-core";
import chromium from "@sparticuz/chromium";

const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));

async function getBrowser() {
  if (process.env.VERCEL) {
    // Production (Vercel)
    return await puppeteerCore.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });
  } else {
    // Local Development
    return await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
  }
}



app.get("/api/scrape", async (req, res) => {
  try {
    const browser = await getBrowser();
    const page = await browser.newPage();
    
    await page.goto("https://quotes.toscrape.com/", {
      waitUntil: "networkidle2"
    })
    
    
    const quotes = await page.evaluate(() => {
    const data = [];
    // const obj = document.querySelectorAll(".quote");
    // console.log(obj);

      document.querySelectorAll(".quote").forEach((quote) => {
        data.push({
          text: quote.querySelector(".text")?.innerText,
          author: quote.querySelector(".author")?.innerText,
          tags: [...quote.querySelectorAll(".tags .tag")].map((tag) => tag.innerText),
        })
      });

      return data;
    })

    await browser.close();


    res.status(200).json({
      success: true,
      quotes
    })
  }
  catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      error: err.message
    })
  }
})


app.listen(3000, () => {
  console.log('listen at port 3000')
})