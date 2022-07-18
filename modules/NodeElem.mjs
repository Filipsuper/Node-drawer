export default class NodeElem{
    #div

    constructor(x,y){

        this.x = x;
        this.y = y;

        this.#div = document.createElement("div");
        const header = document.createElement("header");
        header.className = "drag"
        const input = document.createElement("input");
        input.placeholder = "...";

        this.#div.className = "node";
        this.#div.style.left = this.x + "px";
        this.#div.style.top = this.y + "px";
        
        document.getElementById("board").appendChild(this.#div);
        this.#div.appendChild(header);
        this.#div.appendChild(input);
    }
    setSize(w,h){
        this.#div.style.setProperty("--w", w + "px");
        this.#div.style.setProperty("--h", h + "px");
    }
    remove(){
        this.#div.remove();
    }
    move(x,y){
        this.#div.style.left = x + "px";
        this.#div.style.top = y + "px";
    }
    get div(){
        return this.#div;
    }
}