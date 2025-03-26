import QRCode, { type QRCodeErrorCorrectionLevel } from "qrcode";

type QrCodeOpts = {
  darkColor?: string;
  lightColor?: string;
  scale?: number;
  margin?: number;
  errorCorrectionLevel?: QRCodeErrorCorrectionLevel;
};

const defaultOpts: QrCodeOpts = {
  darkColor: "#000000",
  lightColor: "#ffffff",
  scale: 10,
  margin: 1,
};

export const getQrCode = async (
  url: string,
  opts: QrCodeOpts = defaultOpts
): Promise<Buffer<ArrayBufferLike>> =>
  QRCode.toBuffer(url, {
    color: {
      dark: opts.darkColor,
      light: opts.lightColor,
    },
    errorCorrectionLevel: opts.errorCorrectionLevel,
    margin: opts.margin,
    scale: opts.scale,
  });
