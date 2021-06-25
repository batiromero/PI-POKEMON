import styled from 'styled-components';
import image from '../../assets/img/landscape.webp'

export const StyledDiv = styled.div`
	

.form {
	margin-top: 65px;
	height: 871px;
	display: flex;
	justify-content: center;
	
	
	margin: 0px 0px 0px 0px;
	background-image: url(${image});
	background-position: center center;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: cover;
}
	

	.div_sprite {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 10px 0px 10px 0px;
		width: fit-content;
		height: fit-content;

		.img {
			margin: 0px 0px 15px 0px;
			background-color: white;
			border-radius: 100%;
			box-shadow: 0px 3px 3px 2px rgba(0, 0, 0, 0.4);
			width: 100px;
		}
		.div_f_sprite {
			display: flex;
			justify-content: center;
		}
	}

	.div_g {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		list-style: none;
		width: fit-content;
		height: fit-content;
		margin-top: 100px;

		.title {
			color: white;
			font-size: 25px;
			text-shadow: 3px 2px 4px black;
		}
		.div_create_confirm {
			background-color: #0ead69;
			text-align: justify;
			width: fit-content;
			height: fit-content;
			border-radius: 2px;
			margin: 30px 0px 0px 0px;

			.message_create {
				font-size: 18px;
				padding: 0px 10px 0px 10px;
				text-shadow: 1px 1px 1px black;
				color: white;
			}
		}
		.div_errors {
			background-color: rgba(230, 57, 70, 0.7);
			text-align: justify;
			width: fit-content;
			height: fit-content;
			border-radius: 2px;
			padding: 15px;
			margin: 0px 0px 20px 0px;

			ul {
				padding: 0px;
				margin: 0px 0px 0px 10px;
				list-style: none;
			}

			.li_text {
				padding: 0px;
				color: white;
				text-shadow: 1px 1px 1px black;
			}
		}
		.div_f {
			display: flex;
			justify-content: center;
			align-items: center;
			width: auto;
			padding-top: 5px;
			margin: 6px;
			.div_label {
				display: flex;
				justify-content: start;
				width: 100px;
				margin-right: 20px;
				.label {
					font-size: 15px;
					color: white;
					text-shadow: 1px 2px 2px black;
					
				}
			}
			.input {
				
				width: 200px;
				height: 18px;
			}
		}

		.div_types {
			display: flex;
			justify-content: center;
			width: 150px;
			height: 20px;
			margin-bottom: 40px;
			


			.select[type="text"] {
				font-family: 'Press Start 2P' ;
				cursor: pointer;
				font-size: 15px;
				border-radius: 2px
				
			}
		
			.select {
				margin-left: 30px;
				text-align: center;
			}
		}





			.div_type_container {
				display: flex;
				flex-direction: row;
				justify-content: center;
				margin: 0px 0px 0px 40px;
				.div_type {
					width: fit-content;
					height: fit-content;
					margin: 0px 0px 0px 7px;
					padding: 1px 1px 1px 1px;
					font-size: 15px;
					border-style: solid;
					border-color: black;
					border-width: 0px;
					border-radius: 2px;
					background-color: #A57AAB;
					text-shadow: 0px 1px 1px white;
					box-shadow: 0px 3px 3px 1px rgba(0, 0, 0, 0.3);

					.label {
						margin: 0px 7px 0px 7px;
						
					}
				}
			}
		}

		.div_submit {
			display: flex;
			justify-content: center;
			margin-top: 2px;
			
			
			.btn_submit {
				background: #A21212;
				display: inline-block;
				position: relative;
				text-align: center;
				font-size: 23px;
				padding: 10px 10px 10px 10px;
				margin-top: 30px;
				font-family: 'Press Start 2P', cursive;
				text-decoration: none; 
				color: white;
				box-shadow: inset (-4px) (-4px) 0px 0px #8C2022 ;
			
				&:hover,
				&:focus {
					background: #CE372B;
					box-shadow: inset (-4px*1.5) (-4px*1.5) 0px 0px #8C2022;
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
