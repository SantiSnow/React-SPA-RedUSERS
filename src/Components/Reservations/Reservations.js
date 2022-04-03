import React from "react";

class Reservations extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
            data: this.props.tabla
        }
    }

    getInitialState() {
        return { items: this.props.tabla };
    }

    render()
    {
        return (
            <table className="table mt-5">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Lugar</th>
                        <th scope="col">Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    { this.state.data.map((reserva,index) => <tr key={index.toString()}>
                        <td>{(index + 1).toString()}</td> 
                        <td>{reserva.Lugar}</td>
                        <td>{reserva.Fecha}</td>
                    </tr>) }
                </tbody>
            </table>
        )
    }
}

export default Reservations;