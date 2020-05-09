export class NotificationService {
  public static success(str: string): void {
    console.log('\x1b[36m%s\x1b[0m', str);
  }

  public static info(str: string): void {
    console.log(str);
  }

  public static error(str: string): void {
    console.log('\x1b[31m%s\x1b[0m', str);
  }

  public static warning(str: string): void {
    console.log('\x1b[33m%s\x1b[0m', str);
  }
}
