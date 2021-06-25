import styled from "styled-components";

export const StyledDiv = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 66px;
	overflow: hidden;
	background-color: #A31313;
	position: absolute;
	top: 0px;
	left: 0px;
	box-shadow: 0px 3px 3px 1px rgba(0, 0, 0, 0.3);

	.ball {
		width: 70px;
	}
	.div_logo {
		display: flex;
		justify-content: flex-end;
		width: 300px;
		font-size: 13px;
		height: fit-content;
		margin-left: 20px;
		align-items: center;
		.logo {
			display: contents;
			text-decoration: none;
			color: white;
			text-shadow: 1px 2px 2px black;
		}
	}

	.div_menu {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		margin-right: 60px;
		.div_link {
			display: flex;
			align-items: center;
			height: 50px;
			border-width: 0px 1px 0px 1px;
			padding: 0px 3px 0px 3px;
			margin-right: 10px;
						
		}


		.div_btn {
			display: flex;
			justify-content: center;
			margin-top: 4px;
			
			
			.eightbit-btn {
				background: #A21212;
				display: inline-block;
				position: relative;
				text-align: center;
				font-size: 12px;
				padding: 10px;
				font-family: 'Press Start 2P', cursive;
				text-decoration: none; 
				color: white;
				box-shadow: inset (-4px) (-4px) 0px 0px #8C2022 ;
			
				&:hover,
				&:focus {
					background: #CE372B;
					
				}
			
				&:active {
					box-shadow: inset 4px 4px 0px 0px #8C2022;
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

		}

	}
	
`;
