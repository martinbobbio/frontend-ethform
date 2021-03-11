export class Transaction {
    public address:string
    public amount:number
    public gas:number

    constructor(transactionObject:TransactionObject){
        this.address = transactionObject && transactionObject.address
        this.amount = transactionObject && transactionObject.amount
        this.gas = transactionObject && transactionObject.gas
    }
}

interface TransactionObject {
    address: string
    gas: number
    amount: number
}