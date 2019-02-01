<template>
	<div>
		<div class="banner">
			<div class="title">
				<h1>图书管理，我们更专业</h1>
				<h6>Neusoft  Library Management System</h6>
			</div>
			<div class="search">
				<div class="word">输入关键词，找书籍</div>
				<button type="submit"><img src="../assets/search_logo_blue.png"></button>
			</div>
			<ul class="hot_search">
				<!-- <route-link tag="li" to="./shujifenlei" v-for="search in hot_search" class="classify">{{search.date}}</route-link> -->
				<li v-for="search in hot_search" class="classify" >{{search.date}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				hot_search:[
					{date:'进口原版'},
					{date:'文学'},
					{date:'经济管理'},
					{date:'历史'},
					{date:'计算机与互联网'},
					{date:'艺术与摄影'},
					{date:'科学与自然'},
					{date:'社会科学'},
					{date:'哲学与宗教'},
					{date:'政治与军事'},
					{date:'美食'},
				]
			}
		},
		computed:{},
		watch:{},
		methods:{

		}
	}
</script>

<style lang="scss" scoped>
.banner{
	height:420px;
	width:100%;
	display: block;
	background:url("../assets/banner.jpg") no-repeat;
	background-position: -244px 0;
	position: relative;
	.title{
		width:700px;
		display:block;
		position: absolute;
		top:0;
		left:405px;
		h1{
			width:700px;
			margin-top:95px;
			// margin-bottom:10px;
			text-align: center;
			font-size:36px;
			height:50px;
			line-height:50px;
			color:#fff;
			text-shadow: 2px 2px 5px #1f8dd6;
		}
		h6{
			width:700px;
			margin-bottom:22px;
			text-align:center;
			font-size:24px;
			height:30px;
			line-height:30px;
			color:#1f8dd6;
			text-shadow: 2px 2px 3px #fff;
		}
	}
	.search{
		width:700px;
		height:50px;
		position:absolute;
		top:200px;
		left:405px;
		.word{
			width:640px;
			height:50px;
			padding-left:20px;
			background:#fff;
			border-radius: 5px 0 0 5px;
			position: absolute;
			color:#999;
			font-size:20px;
			line-height:50px;
			display: inline-block;
			position: absolute;
			top:0;
			left:0;
		}
		button{
			width:40px;
			height:50px;
			border:none;
			border-radius:0 5px 5px 0;
			position: absolute;
			top:0;
			right:0;
			background:#fff;
			outline: none;
			cursor: pointer;
		}
	}
	.hot_search{
		position: absolute;
		top:250px;
		left:305px;
		height:25px;
		width:900px;
		line-height:25px;
		display: flex;
		padding:0 2px;
		justify-content:space-between;
		padding-top:10px;
		.classify{
			display:inline-block;
			font-size:14px;
			font-weight: bold;
			color:#fff;
			text-shadow: 1px 1px 2px #1f8dd6;
			cursor: pointer;
		}
		.actClass{
			text-decoration: underline;
			color:#fff;
		}
	}
}
</style>