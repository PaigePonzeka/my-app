import { Customer } from "../types/Customer";
import { Card } from "./Card";
import { Pagination } from "./Pagination";
import { PaginationLabel } from "./PaginationLabel";


type cardContainerProps = {
    customers: Customer[];
}

export const CardsContainer = ({customers} : cardContainerProps) => {
    return (
        <section className="all-customers-container">
            <h3>All Customers</h3>
            <PaginationLabel />
            <div className="card-container">
                {customers.map((customer:Customer) => {
                    return <Card customer={customer} />
                })}
            </div>
            <Pagination />
      </section>
    );
}