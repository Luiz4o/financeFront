import React from "react";

function List() {
const transactions = [{
    transaction: 'casa',
    cost: '120'
},{
    transaction: 'conta',
    cost: '2000'
}]

    return(
        <aside>
            <h2> Receitas e Despezas</h2>
            <ul>
                {transactions.map((transaction, index) => (  //lidamos com um array e usamos .map para percorrer o array, com esta sintaxe ele ja percorre cada elemento
                    <li key={index}>
                        <h3>{transaction.transaction}</h3>
                        <span>{transaction.cost}</span>
                    </li>
                ))}
            </ul>
        </aside>

    )
}

export default List;