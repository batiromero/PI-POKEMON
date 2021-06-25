import styled from 'styled-components';
import './styled.css';
import image from '../../assets/img/pixelgame.png';


export const StyledDiv = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	background-image: url(${image});
	background-position: center center;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: cover;
	margin: 0px 0px 0px -632px;

	
	.div_nav {
		transparency: 0.5px;
		display: flex;
		align-items: center;
		width: 100%;
		height: 66px;
		overflow: hidden;
		background-color: #A31313;
		position: fixed;
		right: -100%;
		top: 0px;
		left: 0px;
		box-shadow: 0px 3px 3px 1px rgba(0, 0, 0, 0.3);
		
		.title {
			display: flex;
			justify-content: center;
			margin-left: 20px;
			align-items: center;
			color: white;
			text-shadow: 1px 2px 2px black;
			font-size: 20px
		}
	}

	
	.div_content {
		margin-top: 333px;
		width: 400px;
		padding: 20px 20px 20px 20px;
		margin-left: 20px;

		.h3 {
			text-align: center;
			font-size: 20px;
			color: white;
			text-shadow: 1px 2px 2px black;
			margin: 4px;
			
			
		}

		.p {
			padding-left: 50px;
			display: flex;
			justify-items: center;
			width: 300px;
			text-align: center;
			font-size: 20px;
			color: white;
			text-shadow: 1px 2px 2px black;
		}

		.hr {
			width: 400px;
			border: 1px solid white;
		}
	}

	.div_btn {
		display: flex;
		justify-content: center;
		margin-top: 2px;
		
		
		.eightbit-btn {
			background: #A21212;
			display: inline-block;
			position: relative;
			text-align: center;
			font-size: 23px;
			padding: 10px 10px 10px 20px;
			font-family: 'Press Start 2P', cursive;
			text-decoration: none; 
			color: white;
			
		
			&:hover,
			&:focus {
				background: #CE372B;
				
			}
		
			&:before,
			&:after {
			content: '';
				position: absolute;
				width: 100%;
				height: 100%;
				box-sizing: content-box;
			}
		
			&:before {
				top: -6px;
				left: 0;
				border-top: 6px black solid;
				border-bottom: 6px black solid;
			}
		
			&:after {
				left: -6px;
				top: 0;
				border-left: 6px black solid;
				border-right: 6px black solid;
			}
	}

	 
`;
