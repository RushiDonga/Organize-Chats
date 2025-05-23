import JSZip from "jszip";

export default async function extractZip(file) {
  const zip = new JSZip();

  try {
    const zipContent = await zip.loadAsync(file);

    for (const fileName of Object.keys(zipContent.files)) {
      const zipEntry = zipContent.files[fileName];

      if (!zipEntry.dir) {
        const content = await zipEntry.async("string");
        return content;
      }
    }
  } catch (error) {
    console.error("Failed to extract zip file:", error);
  }
}
