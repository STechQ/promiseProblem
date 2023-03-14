class test {
    private async wait() {
        return new Promise((res, rej) => {
            setTimeout(res, 1000);
        });
    }

    private async test(item: number) {
        if (item == 2 || item == 3) {
            await this.wait();
            await this.wait();
            await this.wait();
            throw new Error("aaaaaaa");
        } else {
            await this.wait();
        }
        return item;
    }
    private async test2(item: Promise<number>) {
        if (Math.random() < 2) { throw new Error("aa"); }
        const num = await item;
        // if (Math.random() < 2) { throw new Error("aa"); }
        if (num == 4) {
            await this.wait();
            await this.wait();
            await this.wait();
            throw new Error("bbbbbbb");
        } else {
            await this.wait();
        }
    }
    public async createUIPackage() {

        var a = [1, 2, 3, 4, 5];
        const proms = a.map(async item =>
            await this.test(item)
        );

        // await Promise.all(proms);
        const proms2 = proms.map(async (item) =>
            await this.test2(item)
        )
        await Promise.all(proms2);
    }
}


async function execution(){
    setTimeout(() => {
        console.log("yes. success");
    }, 5000);
    try{
        console.log("success ?");
        await new test().createUIPackage();
    }catch(err){
        console.log("handled error");
    }
}
execution();
// process.on("uncaughtException", (err) => {
//     console.log("no fail");
// });