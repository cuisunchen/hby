<template>
	<border class="table flex-column">
		<div class="thead" v-if="isHeadShow">
			<div class="tr flex">
				<div class="th flex1 flex align-center" :class="'justify-' + item.align" v-for="(item,index) in columns" :key="index">					
					<slot :name="'head' + item.key">{{item.title}}</slot>
				</div>
			</div>
		</div>
		<div class="tbody flex1">
			<div class="tr flex" :class="rowBgType" v-for="(row,rowIndex) in datasource" :key="rowIndex" >
				<div class="td flex1 flex align-center" :class="'justify-' + column.align" v-for="(column,columnIndex) in columns" :key="columnIndex">
					<slot :name="'body' + column.key" :text="row[column.key]" :column="column" :record="row" :index="rowIndex">{{row[column.key]}}</slot>
				</div>
			</div>
		</div>
	</border>
</template>

<script lang="ts" setup>
    import border from '../border/border.vue'
	defineProps({
		columns: {
			type: Array,
			default: () => ([])
		},
		datasource: {
			type: Array,
			default: () => ([])
		},
		isHeadShow: {
			type: Boolean,
			default: () => true
		},
		tableHeadBgColor: {
			type: String,
			default: () => ''
		},
		//  行背景色类型  odd 奇数行加背景  even偶数行加背景
		rowBgType: {
			type: String,
			default: () => ''
		},
		headTextColor: {
			type: String,
			default: () => '#fff'
		},
		bodyTextColor: {
			type: String,
			default: () => '#fff'
		},
	})
</script>

<style lang="scss" scoped>
.table{
	.tr{
		height: 50px;
		
	}
	.td, .th{
		padding: 10px 20px;
	}
	.thead{
		.tr{
			background-color: v-bind(tableHeadBgColor);
			.th{
				color: v-bind(headTextColor);
			}
		}
	}
	.tbody{
		.tr{
			.td{
				color: v-bind(bodyTextColor);
			}
			&.odd{
				&:nth-child(odd){
					box-shadow: 0 0 15px -2px rgba(0, 253, 255, 1) inset;
				}				
			}
			&.even{
				&:nth-child(even){
					box-shadow: 0 0 15px -2px rgba(0, 253, 255, 1) inset;
				}
			}
		}
	}
}
</style>
