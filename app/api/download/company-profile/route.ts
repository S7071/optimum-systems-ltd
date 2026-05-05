import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

const PDF_FILENAME = "company-profile.pdf";

function getContentDisposition(filename: string) {
  const fallbackFilename = filename
    .replace(/[^\x20-\x7E]/g, "_")
    .replace(/["\\]/g, "");

  const encodedFilename = encodeURIComponent(filename);

  return `attachment; filename="${fallbackFilename}"; filename*=UTF-8''${encodedFilename}`;
}

export async function GET() {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "downloads",
      PDF_FILENAME
    );

    const fileBuffer = await readFile(filePath);

    return new Response(new Uint8Array(fileBuffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": getContentDisposition(PDF_FILENAME),
        "Content-Length": fileBuffer.byteLength.toString(),
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch {
    return Response.json(
      {
        message: "PDF file not found.",
      },
      {
        status: 404,
      }
    );
  }
}