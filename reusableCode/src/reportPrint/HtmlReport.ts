import { OutputTarget } from "../Summary";
import fs from "fs";
export class HtmlReport implements OutputTarget {
  print(report: string) {
    const html = `<h1>this analyzing for your matches</h1>
    <p>${report}</p>
    `;
    fs.writeFileSync("htmlreport.html", html);
  }
}
