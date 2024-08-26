/** Logo Cards **/

import { Customer } from "../types/Customer";

type cardProps = {
    customer: Customer
}


export const Card= ({customer} : cardProps) => {
    return (
        <div className="card">
            <img src={customer.logo} alt={customer.name} />
        </div>
    );
}