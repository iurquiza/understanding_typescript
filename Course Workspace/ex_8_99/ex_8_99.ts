export{}

class MyMap <U> {
    private items: {[key: string]: U} = {};

    setItem(key: string, value) {
        this.items[key] = value;
    }

    getItem(key: string) {
        return this.items[key];
    }

    clear(){
        this.items = {};
    }

    printMap(){
        console.log(this.items);
    }   
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
 
const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();