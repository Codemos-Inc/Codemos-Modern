import axios from "axios";
import * as fs from "fs";
import { JSDOM } from "jsdom";
import path = require("path");

modifySvg(
  "https://img.shields.io/github/release/Codemos-Inc/Codemos-Modern.svg?labelColor=373737&color=45AA41&label=&logo=github&logoColor=white&style=for-the-badge",
  path.join(__dirname, "..", "..", "images/badge-release.svg"),
);

modifySvg(
  "https://img.shields.io/badge/-v1.85+-4B9ECD.svg?labelColor=373737&label=&logo=visualstudiocode&logoColor=white&style=for-the-badge",
  path.join(__dirname, "..", "..", "images/badge-vscode.svg"),
);

modifySvg(
  "https://img.shields.io/visual-studio-marketplace/d/codemos.codemos-modern?labelColor=373737&color=9B87EA&label=&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4XzE2KSI+CjxwYXRoIGQ9Ik0xMiAxOEw0LjUgMTAuNUw2LjYgOC4zMjVMMTAuNSAxMi4yMjVWMEgxMy41VjEyLjIyNUwxNy40IDguMzI1TDE5LjUgMTAuNUwxMiAxOFpNMyAyNEMyLjE3NSAyNCAxLjQ2ODc1IDIzLjcwNjMgMC44ODEyNSAyMy4xMTg4QzAuMjkzNzUgMjIuNTMxMyAwIDIxLjgyNSAwIDIxVjE2LjVIM1YyMUgyMVYxNi41SDI0VjIxQzI0IDIxLjgyNSAyMy43MDYzIDIyLjUzMTMgMjMuMTE4OCAyMy4xMTg4QzIyLjUzMTMgMjMuNzA2MyAyMS44MjUgMjQgMjEgMjRIM1oiIGZpbGw9IndoaXRlIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMThfMTYiPgo8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==&logoColor=white&style=for-the-badge",
  path.join(__dirname, "..", "..", "images/badge-downloads.svg"),
);

modifySvg(
  "https://img.shields.io/github/sponsors/EmrecanKaracayir?labelColor=373737&color=ef6363&label=&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2Ljk1IDFDMTguOTUgMSAyMC42MjUgMS43NCAyMS45NzUgMy4yMkMyMy4zMjUgNC43IDI0IDYuNDYgMjQgOC41QzI0IDguODYgMjMuOTggOS4yMTUgMjMuOTQgOS41NjVDMjMuOSA5LjkxNSAyMy44MyAxMC4yNiAyMy43MyAxMC42SDE2LjIzTDE0LjE5IDcuNTRDMTQuMDkgNy4zOCAxMy45NSA3LjI1IDEzLjc3IDcuMTVDMTMuNTkgNy4wNSAxMy40IDcgMTMuMiA3QzEyLjk0IDcgMTIuNzA1IDcuMDggMTIuNDk1IDcuMjRDMTIuMjg1IDcuNCAxMi4xNCA3LjYgMTIuMDYgNy44NEwxMC40NCAxMi43TDkuMzkgMTEuMTRDOS4yOSAxMC45OCA5LjE1IDEwLjg1IDguOTcgMTAuNzVDOC43OSAxMC42NSA4LjYgMTAuNiA4LjQgMTAuNkgwLjI3QzAuMTcgMTAuMjYgMC4xIDkuOTE1IDAuMDYgOS41NjVDMC4wMiA5LjIxNSAwIDguODcgMCA4LjUzQzAgNi40NyAwLjY3IDQuNyAyLjAxIDMuMjJDMy4zNSAxLjc0IDUuMDIgMSA3LjAyIDFDNy45OCAxIDguODg1IDEuMTkgOS43MzUgMS41N0MxMC41ODUgMS45NSAxMS4zNCAyLjQ4IDEyIDMuMTZDMTIuNjQgMi40OCAxMy4zODUgMS45NSAxNC4yMzUgMS41N0MxNS4wODUgMS4xOSAxNS45OSAxIDE2Ljk1IDFaTTEyIDIyLjZDMTEuNjQgMjIuNiAxMS4yOTUgMjIuNTM1IDEwLjk2NSAyMi40MDVDMTAuNjM1IDIyLjI3NSAxMC4zNCAyMi4wOCAxMC4wOCAyMS44MkwyLjA0IDEzLjc1QzEuOTIgMTMuNjMgMS44MSAxMy41MSAxLjcxIDEzLjM5QzEuNjEgMTMuMjcgMS41MSAxMy4xNCAxLjQxIDEzSDcuNzRMOS43OCAxNi4wNkM5Ljg4IDE2LjIyIDEwLjAyIDE2LjM1IDEwLjIgMTYuNDVDMTAuMzggMTYuNTUgMTAuNTcgMTYuNiAxMC43NyAxNi42QzExLjAzIDE2LjYgMTEuMjcgMTYuNTIgMTEuNDkgMTYuMzZDMTEuNzEgMTYuMiAxMS44NiAxNiAxMS45NCAxNS43NkwxMy41NiAxMC45TDE0LjU4IDEyLjQ2QzE0LjcgMTIuNjIgMTQuODUgMTIuNzUgMTUuMDMgMTIuODVDMTUuMjEgMTIuOTUgMTUuNCAxMyAxNS42IDEzSDIyLjU2TDIyLjI2IDEzLjM2TDIxLjk2IDEzLjcyTDEzLjg5IDIxLjgyQzEzLjYzIDIyLjA4IDEzLjM0IDIyLjI3NSAxMy4wMiAyMi40MDVDMTIuNyAyMi41MzUgMTIuMzYgMjIuNiAxMiAyMi42WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==&logoColor=white&style=for-the-badge",
  path.join(__dirname, "..", "..", "images/badge-sponsors.svg"),
);

modifySvg(
  "https://img.shields.io/visual-studio-marketplace/r/codemos.codemos-modern?style=for-the-badge&label=&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzIyXzI4KSI+CjxwYXRoIGQ9Ik0xMiA4LjI4VjE1LjM2TDE0Ljg4IDE3LjU4TDEzLjggMTMuOTJMMTYuNSAxMkgxMy4xNEwxMiA4LjI4Wk00LjU5IDI0TDcuMzggMTQuODhMMCA5LjZIOS4xMkwxMiAwTDE0Ljg4IDkuNkgyNEwxNi42MiAxNC44OEwxOS40MSAyNEwxMiAxOC4zNkw0LjU5IDI0WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8yMl8yOCI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K&logoColor=white&labelColor=373737&color=BFAF40",
  path.join(__dirname, "..", "..", "images/badge-rating.svg"),
);

function modifySvg(url: string, path: string): void {
  axios
    .get(url)
    .then(function (response) {
      if (response.status === 200) {
        const dom = new JSDOM(response.data, { contentType: "image/svg+xml" });
        const doc = dom.window.document;

        // Take the original svg
        const originalSvg = doc.documentElement;

        // Calculate the new width and height
        const originalWidth = parseFloat(
          originalSvg.getAttribute("width") as string,
        );
        const originalHeight = parseFloat(
          originalSvg.getAttribute("height") as string,
        );
        const newWidth = originalWidth + 2;
        const newHeight = originalHeight + 2;

        // Create the new root svg and set its attributes
        const newRootSvg = doc.createElement("svg");
        newRootSvg.setAttribute(
          "xmlns",
          originalSvg.getAttribute("xmlns") as string,
        );
        newRootSvg.setAttribute(
          "xmlns:xlink",
          originalSvg.getAttribute("xmlns:xlink") as string,
        );
        newRootSvg.setAttribute("width", `${newWidth}`);
        newRootSvg.setAttribute("height", `${newHeight}`);

        // Create defs, clipPath, and rect children for new root svg
        const defs = doc.createElement("defs");
        const clipPath = doc.createElement("clipPath");
        clipPath.setAttribute("id", "c-path");
        const clipRectangle = doc.createElement("rect");
        clipRectangle.setAttribute("width", `${originalWidth}`);
        clipRectangle.setAttribute("height", `${originalHeight}`);
        clipRectangle.setAttribute("rx", "4");
        clipRectangle.setAttribute("ry", "4");
        const outerRect = doc.createElement("rect");
        outerRect.setAttribute("width", "100%");
        outerRect.setAttribute("height", "100%");
        outerRect.setAttribute("rx", "5");
        outerRect.setAttribute("ry", "5");
        outerRect.setAttribute("fill", "#75757566");

        // Add innerRect to clipPath, clipPath to defs
        clipPath.appendChild(clipRectangle);
        defs.appendChild(clipPath);

        // Appending necessary elements to newRootSvg
        newRootSvg.appendChild(defs);
        newRootSvg.appendChild(outerRect);
        newRootSvg.appendChild(originalSvg);

        // Replace original svg with newRootSvg
        doc.appendChild(newRootSvg);

        // Modify original svg attributes
        originalSvg.setAttribute("x", "1");
        originalSvg.setAttribute("y", "1");
        originalSvg.setAttribute("clip-path", "url(#c-path)");

        const modifiedString = new dom.window.XMLSerializer().serializeToString(
          doc.documentElement,
        );

        fs.writeFile(path, modifiedString, "utf8", function (error) {
          if (error) {
            console.log(error);
            process.exit(1);
          } else {
            console.log(
              `SVG modification is done for: ${path.split("/").pop()}`,
            );
          }
        });
      }
    })
    .catch(function (error) {
      console.log(error);
      process.exit(1);
    });
}
