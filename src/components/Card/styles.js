import styled from 'styled-components'

export const SCCard = styled.div`
	float: left;
	margin: 15px;
	width: 100px;
	height: 200px;
	padding: 5px;
	text-align: center;
	perspective: 500px;
	position: relative;
	cursor: pointer;
	z-index: 50;
	background: grey;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	transform-style: preserve-3d;
	transition: .4s ease-in-out;

	:hover {
		box-shadow: 10px 10px 10px #00000050;
	}

	&.picked {
		transform: rotateY(180deg) scale(2) translateY(calc(10vh));
		animation-delay: .4s;
		background: white;
		z-index: 1000;
	}

	.front,
	.back {
		border: 1px solid black;
		backface-visibility: hidden;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		display:flex;
		flex-direction: column;

		span {
			padding: 8px;
			:first-child {
				align-self:flex-start;
			}
	
			:last-child {
				align-self:flex-end;
			}
		}
		
		img {
			max-width: 100%;	
			max-height: 100%;
			align-self: center;
			flex:1;
		}
	}

	.front {
		transform: rotateY(-180deg);
		@include width(800px) {
			padding: 5px;
		}
	}
`;
