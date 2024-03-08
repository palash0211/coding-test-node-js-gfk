import * as crypto from 'crypto';

export class CryptoUtil {
  private static readonly algorithm = 'aes-256-ctr';

  private static readonly secretKey = crypto.createHash('sha256').update('demo-project-secret-key').digest();
  private static readonly iv = crypto.randomBytes(16);

  public static encrypt(text: string): string {
    const cipher = crypto.createCipheriv(
      CryptoUtil.algorithm,
      Buffer.from(CryptoUtil.secretKey),
      CryptoUtil.iv
    );

    const encrypted = Buffer.concat([cipher.update(text, 'utf-8'), cipher.final()]);

    return `${CryptoUtil.iv.toString('hex')}:${encrypted.toString('hex')}`;
  }

  public static decrypt(encryptedText: string): string {
    const [ivHex, encryptedHex] = encryptedText.split(':');
    const iv = Buffer.from(ivHex, 'hex');
    const encryptedTextBuffer = Buffer.from(encryptedHex, 'hex');

    const decipher = crypto.createDecipheriv(
      CryptoUtil.algorithm,
      Buffer.from(CryptoUtil.secretKey),
      iv
    );

    const decrypted = Buffer.concat([decipher.update(encryptedTextBuffer), decipher.final()]);

    return decrypted.toString('utf-8');
  }
}
