import * as fs from "fs";
import { join } from "path";
import type { CacheCategory } from "../@types";
import { CACHE_DIR_PATH } from "./paths";

export function checkCacheForFile(
  category: CacheCategory,
  directory: string,
  file: string,
): boolean {
  directory = directory.toLowerCase();
  file = file.toLowerCase();
  const path = join(CACHE_DIR_PATH, category, directory, file);
  return fs.existsSync(path);
}

export function getCachedFileContent(
  category: CacheCategory,
  directory: string,
  file: string,
): string {
  directory = directory.toLowerCase();
  file = file.toLowerCase();
  const path = join(CACHE_DIR_PATH, category, directory, file);
  return fs.readFileSync(path, "utf-8");
}

export async function cacheFile(
  category: CacheCategory,
  directory: string,
  file: string,
  contents: string,
): Promise<void> {
  directory = directory.toLowerCase();
  file = file.toLowerCase();
  const path = join(CACHE_DIR_PATH, category, directory, file);
  if (!fs.existsSync(join(CACHE_DIR_PATH, category, directory))) {
    fs.mkdirSync(join(CACHE_DIR_PATH, category, directory), {
      recursive: true,
    });
  }
  return new Promise((resolve, reject) => {
    fs.writeFile(path, contents, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

export async function deleteCachedDir(
  category: CacheCategory,
  directory: string,
): Promise<void> {
  directory = directory.toLowerCase();
  const path = join(CACHE_DIR_PATH, category, directory);
  return new Promise((resolve, reject) => {
    fs.rm(path, { recursive: true }, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

export function checkIfFileCached(
  category: CacheCategory,
  directory: string,
  file: string,
): boolean {
  directory = directory.toLowerCase();
  file = file.toLowerCase();
  const path = join(CACHE_DIR_PATH, category, directory, file);
  return fs.existsSync(path);
}
