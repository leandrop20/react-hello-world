export class Help {
    static async delay(value: number = 100): Promise<any> {
        setTimeout(() => {
            new Promise(resolve => {
                resolve(true);
            });
        }, value);
    }
}