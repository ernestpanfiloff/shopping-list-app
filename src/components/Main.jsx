import React, { useState } from "react";

export default function Main() {

    const [item, setItem] = useState("");
    const [quantity, setQuantity] = useState("");
    const [list, setList] = useState([]);

    // Add item to the list
    const addItem = () => {

        
        if (item.length > 0) {
            setList([...list, { item, quantity }]);
        } else {
            document.querySelector(".Main-Add-Form-Input").style.border =
                "1px solid red";
        }

        // remove red border after 1 second
        setTimeout(() => {
            document.querySelector(".Main-Add-Form-Input").style.border =
                "1px solid #E3E8F1";
        }, 1000);

        setItem("");
        setQuantity("");
    };

    const clearList = () => {
        setList([]);
    };

    return (
        <div className="container">
            <main>
                <div class="Main-Add">
                    <h2 class="Main-Add-Title">Add an item</h2>

                    <div class="Main-Add-Form">
                        <input
                            type="text"
                            class="Main-Add-Form-Input"
                            placeholder="Milk"
                            value={item}
                            onChange={(e) => setItem(e.target.value)}
                        />
                        <input
                            type="number"
                            class="Main-Add-Form-Input"
                            placeholder="1"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                        <button
                            type="button"
                            class="Main-Add-Form-Button"
                            onClick={addItem}
                        >
                            Add item
                        </button>
                    </div>
                </div>

                <div class="Main-List">
                    <h2 class="Main-List-Title" id="list-title">
                        My shopping list{" "}
                    </h2>
                    <ul class="Main-List-ul">
                        {list.map((item, index) => (
                            <li key={index}>
                                {item.item}
                                <span class="badge bg-primary rounded-pill">
                                    {item.quantity}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <div class="text-center">
                        {list.length > 0 && (
                            <button type="button" class="btn btn-sm mt-1" onClick={clearList}>
                                Clear shopping list
                            </button>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
