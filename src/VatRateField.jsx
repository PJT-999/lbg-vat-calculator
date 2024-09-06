import React, { useEffect } from 'react';

const VatRateField = (props) => {

    // destructure to remove warning about useEffect and any prop causing it to fire
    const { updatePrices } = props;

    useEffect(() => {
        updatePrices();
    }, [props.value, updatePrices]);

    return (
        <div className={props.customstyle}>
            VAT Rate: &nbsp;
            <select value={props.value} onChange={(event) => { props.vatRateChanged(+event.target.value); }}>
                <option value="2000">2000%</option>
                <option value="150">150%</option>
                <option value="0.5">0.5%</option>
                <option value="0">Exempt</option>
            </select>
        </div>
    );
}

export default VatRateField;
