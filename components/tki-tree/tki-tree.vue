<template xlang="wxml" minapp="mpvue">
	<view class="tki-tree" @touchmove.stop="">
		<view class="tki-tree-mask" :class="{'show':showTree}" @tap="_cancel"></view>
		<view class="tki-tree-cnt" :class="{'show':showTree}">
			<view class="tki-tree-bar">
				<view class="tki-tree-bar-cancel" :style="{'color':cancelColor}" hover-class="hover-c" @tap="_cancel">取消</view>
				<view class="tki-tree-bar-title" :style="{'color':titleColor}">{{title}}</view>
				<view class="tki-tree-bar-confirm" :style="{'color':confirmColor}" hover-class="hover-c" @tap="_confirm">确定</view>
			</view>
			<view class="tki-tree-view">
				<scroll-view class="tki-tree-view-sc" :scroll-y="true">
					<block v-for="(item, index) in treeList" :key="index">
						<view class="tki-tree-item" :style="[{
							paddingLeft: item.rank*15 + 'px',
							zIndex: item.rank*-1 +50
						}]" :class="{
							border: border === true,
							show: item.show,
							last: item.lastRank,
							showchild: item.showChild
						}">
							<view class="tki-tree-label" @tap.stop="_treeItemTap(item, index)">
								<image class="tki-tree-icon" :src="item.lastRank ? lastIcon : item.showChild ? currentIcon : defaultIcon"></image>
								{{item.name}}
							</view>
							<view class="tki-tree-check" @tap.stop="_treeItemSelect(item, index)" v-if="selectParent?true:item.lastRank">
								<view class="tki-tree-check-yes" v-if="item.checked" :class="{'radio':!multiple}" :style="{'border-color':confirmColor}">
									<view class="tki-tree-check-yes-b" :style="{'background-color':confirmColor}"></view>
								</view>
								<view class="tki-tree-check-no" v-else :class="{'radio':!multiple}" :style="{'border-color':confirmColor}"></view>
							</view>
						</view>
					</block>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: "tki-tree",
	props: {
		range: {
			type: Array,
			default: function () {
				return []
			}
		},
		rangeKey: {
			type: String,
			default: 'label'
		},
		title: {
			type: String,
			default: ''
		},
		multiple: { // 是否可以多选
			type: Boolean,
			default: false
			// default: true
		},
		selectParent: { //是否可以选父级
			type: Boolean,
			default: false
		},
		confirmColor: { // 确定按钮颜色
			type: String,
			default: '' // #07bb07
		},
		cancelColor: { // 取消按钮颜色
			type: String,
			default: '' // #757575
		},
		titleColor: { // 标题颜色
			type: String,
			default: '' // #757575
		},
		currentIcon: { // 展开时候的ic
			type: String,
			default: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAYAAACqj0o2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEQ0QTM0MzQ1Q0RBMTFFOUE0MjY4NzI1Njc1RjI1ODIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEQ0QTM0MzU1Q0RBMTFFOUE0MjY4NzI1Njc1RjI1ODIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowRDRBMzQzMjVDREExMUU5QTQyNjg3MjU2NzVGMjU4MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowRDRBMzQzMzVDREExMUU5QTQyNjg3MjU2NzVGMjU4MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PidwepsAAAK0SURBVHja7JxbTsJAFIYHww7ciStgCeoGvGxAiOsgURegoL5720AXYLiIr0aJviq3Zx3PhIEnKG3ndtr+f3KixrSUj/ZjzjClIqUUiFm2gAAQAREQEUAEREAERAQQAREQAREBREAEREBEEqa67h9RFDWllDv0awWYlqlQHmu1WjMRRMoV1QFttA12y3xRtdNczq8EsE4/f8FumX2q77ROvNXk8UGMEKdUz6tYJHljaZAbuyUH+UR1to5BEohTuqwPCeS4pAA/qY6o/kyHOAMCeRK3owJnj+rH1jjxhqpVsstaebCz6TmnHWyXyY+xHjSBWBY/bvSgadtXBj9u9KCN3rnIfkzkQVsTEEX0Y2IP2oKo/HhMICcFAThUcwVZNGU6FdbX/XURzkbVF4+ybGhjPrFdgP66QdXNurGtSdk6Xdb9nAJ8oDo3OQlsQZzkdPw41ONBo6vI5scDefRjZg+6gpg3Pxp50CXEvPjR2IOuIXL3oxUPuobI3Y9WPOgDIlc/WvOgL4iL/vqFCcD7LH0xB4hj7cfQ/fWH9qCT+FhG0tN+DBk1PzjOM0SVllixcsBT1AvYc/kAPhc0hRg/3uvxoCgKRN9+dOrBUBB9+9GpB0NC9OVH5x4MDdG1H714kANEV3705kEOEBf9dcPi/lQnsuvLg1wgSu3Ha0v7Uh4MMgUXeuG71H407a+VBy9CPQkOdw+MtB+nGbd/D+FBbhBNxo9SjwcngJjNj0E9yBFiFj8G9SBXiGn8GNyDnCEm8SMLD3KHGOdHNh7kDjHOj2w8mAeIi/5arX+c6b/fxHz9oADEdGdjR/fXCw/OOB5oVfCOgnepz8IB14PMw03jCmTE+QBx5z0gAmKSqK9OUF+hcAeIhu/QYr4Qie8rjW83hhMBERARQAREQAREBBABERCLnH8BBgA+TQI7U4t53AAAAABJRU5ErkJggg=='
		},
		defaultIcon: { // 折叠时候的ic
			type: String,
			default: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAYAAACqj0o2AAACE0lEQVR4Xu3c200DMRCF4XEltJAOkEugA+ggpUAHoQMqiFMCdEAJUMEiS4mEELlIO7bPOeN9i6K1rG/952myyea1WiCtXmEuYBPR4RBMxInoIOCwhOtJLKVszWyXc/5y2BvNEq6I+/3+kFK6M7OHnPM7jcLKjbZAvD/uaZtzflm5P4rbWyJWgDcze1LPuzVihfxUz7sH4ilJ2bx7Isrm3RtRMu8RiHJ5j0SUyXs0okTeCIj0eSMh0uaNhkiZNyIiXd7IiDR5oyNS5M2ACJ83EyJs3myIkHkzIsLlzYwIkzc7IkTeCojD81ZCHJa3GuKQvBURu+etjNgtb3XELnlHQGyedyTEZnlHQ2ySd0RE97wjI7rlHR3RJe+JeIrbLOecD6ePpZQ6W1kn2epo4MUrPOKyLN8ppYq1+y1VStncOjIdGnFZlo+U0uOtWOeOY2TE12Ouq//pEA7xXL7XfvcufR8K0Svfv6CREN3yDYfYIt9QiK3yjYTYLF95xB75SiP2ylcZsVu+cogj8pVCHJWvEuKwfOkREfKlRkTJlxkRJl86RMR8qRBR82VChM0XHpEhX2hElnyREWnyhUNkzBcKkTVfJETafIcjKuQ7FFEl35GIMvl2R1TMtyuiar49EWXzbY5oZpv/hibXTF2h3+s60FRKeT6+3TjMS3nrA3ZFRD8xrfY3ER1kJ+JEdBBwWGKeRAfEH1wS5WFZSDB/AAAAAElFTkSuQmCC'
		},
		lastIcon: { // 没有子集的ic
			type: String,
			default: ''
		},
		border: { // 是否有分割线
			type: Boolean,
			default: false
		},
	},
	data() {
		return {
			showTree: false,
			treeList: [],
			selectIndex: -1,
            arr:[],
            arr1:[]
		}
	},
	computed: {
	},
	methods: {
		_show() {
			this.showTree = true
		},
		_hide() {
			this.showTree = false
		},
		_cancel() {
			this._hide()
			this.$emit("cancel", '');
		},
		_confirm() {
			// 处理所选数据
			let rt = [], obj = {};
			this.treeList.forEach((v, i) => {
				if (this.treeList[i].checked) {
					obj = {}
					obj.parents = this.treeList[i].parents
					obj = Object.assign(obj, this.treeList[i].source)
					// 移除子元素
					delete obj.children
					rt.push(obj)
				}
			})
			this._hide()
			this.$emit("confirm", rt);
		},
		//扁平化树结构
		_renderTreeList(list = [], rank = 0, parentId = [], parents = []) {
			list.forEach(item => {
				this.treeList.push({
					id: item.id,
					name: item[this.rangeKey],
					source: item,
					parentId,  // 父级id数组
					parents,  // 父级id数组
					rank,  // 层级
					showChild: false,  //子级是否显示
					show: rank === 0,  // 自身是否显示
					checked: false,
				})
				if (Array.isArray(item.children) && item.children.length > 0) {
					// console.log(item)
					let parentid = [...parentId], parentArr = [...parents];
					delete parentArr.children
					parentid.push(item.id);
					parentArr.push({ id: item.id, [this.rangeKey]: item[this.rangeKey] })
					this._renderTreeList(item.children, rank + 1, parentid, parentArr);
				} else {
					this.treeList[this.treeList.length - 1].lastRank = true;
				}
			})
		},
		// 点击
		_treeItemTap(item, index) {
			if (item.lastRank === true) {
				//点击最后一级时触发事件
				this.treeList[index].checked = !this.treeList[index].checked
				this._fixMultiple(index)
                 console.log('1')
				return;
			}
			let list = this.treeList;
			let id = item.id;
			item.showChild = !item.showChild;
			list.forEach((childItem, i) => {
				if (item.showChild === false) {
					//隐藏所有子级
					if (!childItem.parentId.includes(id)) {
						return;
					}
					if (childItem.lastRank !== true) {
						childItem.showChild = false;
					}
					childItem.show = false;
				} else {
					if (childItem.parentId[childItem.parentId.length - 1] === id) {
						childItem.show = true;
					}
				}
			})
		/* 	console.log(this.treeList)
            console.log('2') */
		},
		_treeItemSelect(item, index) {
             var e=0
        
           console.log(this.treeList)
			this.treeList[index].checked = !this.treeList[index].checked
			// this._fixMultiple(index)
          console.log(  this.treeList.slice(1,4).length)
          let selectedchange1=[] //客户多选调整数据
          let selectedchange2=[] //产品多选调整数据
         
          console.log(this.treeList[1].id.indexof())
         /* for (let i=0;i<this.treeList.length;i++){
              if(this.treeList[i].id==2){
                  let arr={index:'',value:[]}
                 arr.index=0
                 selectedchange1.push(arr)
              }else if (Number(this.treeList[i].id)>=20 && Number(this.treeList[i].id)<=29){
                  e++
                  selectedchange1[0].value.push(e)
              }else if (this.treeList[i].id==3){
                  let arr1={index:'',value:[]}
                  arr1.index=selectedchange1[0].value.length+1
                  selectedchange2.push(arr1)
              }else if(Number(this.treeList[i].id)>=30 && Number(this.treeList[i].id)<=39){
                  selectedchange1[0].value.length++
                  selectedchange2[0].value.push(selectedchange1[0].value.length)
              }
          } */         
          console.log(selectedchange1)
          console.log(selectedchange2)
          
          
            if(index==0){
                for (let i=1;i<=this.treeList.slice(1,5).length;i++){
                    this.treeList[i].checked= true
                   
                }
            }
           /* console.log(this.treeList[1].checked)
           if(this.treeList[1].checked==false){
               console.log('取消选中状态')
           }
            console.log(this.treeList[1].checked)
           console.log(this.treeList[2].checked)
           console.log(this.treeList[3].checked) */
           
           for (let i=1;i<=this.treeList.slice(1,5).length;i++){
               
              if(this.treeList[i].checked==false){
                   this.treeList[0].checked=false
                }
            }
           console.log(index)
		},
		// 处理单选多选
		_fixMultiple(index) {
			if (!this.multiple) {
				// 如果是单选
				this.treeList.forEach((v, i) => {
					if (i != index) {
						this.treeList[i].checked = false
					}
				})
			}
		},
		// 重置数据
		_reTreeList() {
			this.treeList.forEach((v, i) => {
				this.treeList[i].checked = false
			})
		}
	},
	watch: {
		range(list) {
			this._renderTreeList(list);
		},
		multiple() {
			if (this.range.length) {
				this._reTreeList();
			}
		},
		selectParent() {
			if (this.range.length) {
				this._reTreeList();
			}
		},
	},
	mounted() {
	}
}
</script>

<style>
@import "style.css";
</style>
