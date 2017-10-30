class Sharpie {
    constructor(color, width) {
        this.color = color;
        this.width = width;
        this.inkAmount = 100;
    }
    use () {
        this.inkAmount -= this.width;
    }
}

var greenSharpie = new Sharpie('green', 1)

function destroySharpie(sharpie) {
    for (let i = sharpie.inkAmount; i >= sharpie.width; i -= sharpie.width) {
        sharpie.use()
        console.log(i)   
    }
}

destroySharpie(greenSharpie)
console.log(greenSharpie)