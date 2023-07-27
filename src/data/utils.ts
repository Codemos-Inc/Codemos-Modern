import * as fs from "fs";
import { join } from "path";

export const checkCacheForFile = (
  category: string,
  directory: string,
  file: string,
): boolean => {
  const path = join(__dirname, "..", "..", "cache", category, directory, file);
  return fs.existsSync(path);
};

export const getCachedFileContents = (
  category: string,
  directory: string,
  file: string,
): string => {
  const path = join(__dirname, "..", "..", "cache", category, directory, file);
  return fs.readFileSync(path, "utf-8");
};

export const cacheFile = async (
  category: string,
  directory: string,
  file: string,
  contents: string,
): Promise<void> => {
  const path = join(__dirname, "..", "..", "cache", category, directory, file);
  return new Promise((resolve, reject) => {
    fs.writeFile(path, contents, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};

export const deleteCachedDir = async (
  category: string,
  directory: string,
): Promise<void> => {
  const path = join(__dirname, "..", "..", "cache", category, directory);
  return new Promise((resolve, reject) => {
    fs.rmdir(path, { recursive: true }, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};

export const checkIfFileCached = (
  category: string,
  directory: string,
  file: string,
): boolean => {
  const path = join(__dirname, "..", "..", "cache", category, directory, file);
  return fs.existsSync(path);
};
