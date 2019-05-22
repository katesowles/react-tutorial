import React from 'react';
import styled from 'styled-components'; 

export const Square = props => {
	const {
		onClick,
		winningCombo,
		value
	} = props;

	const StyledSquare = styled.button`
		background: #fff;
		background-color: ${props => props.winningCombo ? '#eee' : 'transparent'};
		border: 1px solid #999;
		float: left;
		font-size: 24px;
		font-weight: bold;
		line-height: 34px;
		height: 34px;
		margin-right: -1px;
		margin-top: -1px;
		padding: 0;
		text-align: center;
		width: 34px;
		&:focus {
			outline: none;
			background: #ddd;
		}
	`;

	return (
		<StyledSquare winningCombo={ winningCombo } className="square" onClick={ onClick }>
			{ value }
		</StyledSquare>	);
};

export default Square;
