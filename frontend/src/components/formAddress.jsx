import React from 'react';
import PropTypes from 'prop-types';
import './formAddressStyle.css';

function FormAddress({ inpuAddress,
  setInputAddress, inpuNumber, setInputNumber, selectSeller, setSeller }) {
  return (
    <div className="address-body">
      <form className="form-body">
        <div>
          <p className="form-text">P. Vendedora Responsável</p>
          <select
            className="seller-name"
            value=""
            data-testid="customer_checkout__select-seller"
            onChange={ ({ target }) => setSeller(target.value) }
          >
            {selectSeller.map((each) => (
              <option key={ each.id }>
                {each.name}
              </option>))}
          </select>
        </div>
        <div>
          <p className="form-text">Endereço</p>
          <input
            className="address-input"
            type="text"
            data-testid="customer_checkout__input-address"
            value={ inpuAddress }
            onChange={ ({ target }) => setInputAddress(target.value) }
            maxLength="100"
          />
        </div>
        <div>
          <p className="form-text">Número</p>
          <input
            className="number-input"
            type="text"
            data-testid="customer_checkout__input-address-number"
            value={ inpuNumber }
            onChange={ ({ target }) => setInputNumber(target.value) }
            maxLength="50"
          />
        </div>
      </form>
    </div>
  );
}

FormAddress.propTypes = {
  inpuAddress: PropTypes.string,
  setInputAddress: PropTypes.func,
  inpuNumber: PropTypes.string,
  setInputNumber: PropTypes.func,
  selectSeller: PropTypes.string,
  setSelectSeller: PropTypes.func,
}.isRequired;

export default FormAddress;
