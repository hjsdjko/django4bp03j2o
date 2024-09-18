<template>
	<div class="addEdit-block" :style='{"padding":"0 30px","margin":"0 auto","color":"#666","borderRadius":"4px","background":"none","width":"96%","fontSize":"16px"}'>
		<el-form
			:style='{"border":"1px solid #dcd6c3","padding":"40px 0 20px","boxShadow":"0 0px 0px rgba(64, 158, 255, .3)","margin":"30px 0 0","borderRadius":"4px","alignItems":"center","flexWrap":"wrap","background":"rgba(255,255,255,.69)","display":"flex","fontSize":"inherit"}'
			class="add-update-preview"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="150px"
		>
			<template >
				<el-form-item :style='{"width":"50%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' class="input" v-if="type!='info'"  label="标题" prop="title">
					<el-input v-model="ruleForm.title" placeholder="标题" clearable  :readonly="ro.title"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' v-else class="input" label="标题" prop="title">
					<el-input v-model="ruleForm.title" placeholder="标题" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' class="upload" v-if="type!='info' && !ro.cover" label="图片" prop="cover">
					<file-upload
						tip="点击上传图片"
						action="file/upload"
						:limit="3"
						:multiple="true"
						:fileUrls="ruleForm.cover?ruleForm.cover:''"
						@change="coverUploadChange"
					></file-upload>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' class="upload" v-else-if="ruleForm.cover" label="图片" prop="cover">
					<img v-if="ruleForm.cover.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.cover.split(',')[0]" width="100" height="100">
					<img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.cover.split(',')" :src="$base.url+item" width="100" height="100">
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' class="input" v-if="type!='info'"  label="徽章" prop="badge">
					<el-input v-model="ruleForm.badge" placeholder="徽章" clearable  :readonly="ro.badge"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' v-else class="input" label="徽章" prop="badge">
					<el-input v-model="ruleForm.badge" placeholder="徽章" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' class="input" v-if="type!='info'"  label="子标题" prop="subtitle">
					<el-input v-model="ruleForm.subtitle" placeholder="子标题" clearable  :readonly="ro.subtitle"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' v-else class="input" label="子标题" prop="subtitle">
					<el-input v-model="ruleForm.subtitle" placeholder="子标题" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' class="input" v-if="type!='info'"  label="评分" prop="score">
					<el-input-number v-model="ruleForm.score" placeholder="评分" :disabled="ro.score"></el-input-number>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' v-else class="input" label="评分" prop="score">
					<el-input v-model="ruleForm.score" placeholder="评分" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' class="input" v-if="type!='info'"  label="话数" prop="huashu">
					<el-input v-model="ruleForm.huashu" placeholder="话数" clearable  :readonly="ro.huashu"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' v-else class="input" label="话数" prop="huashu">
					<el-input v-model="ruleForm.huashu" placeholder="话数" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' class="input" v-if="type!='info'"  label="追番" prop="zhuifan">
					<el-input v-model="ruleForm.zhuifan" placeholder="追番" clearable  :readonly="ro.zhuifan"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' v-else class="input" label="追番" prop="zhuifan">
					<el-input v-model="ruleForm.zhuifan" placeholder="追番" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' class="input" v-if="type!='info'"  label="媒体ID" prop="mediaid">
					<el-input v-model="ruleForm.mediaid" placeholder="媒体ID" clearable  :readonly="ro.mediaid"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' v-else class="input" label="媒体ID" prop="mediaid">
					<el-input v-model="ruleForm.mediaid" placeholder="媒体ID" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' class="input" v-if="type!='info'"  label="详情地址" prop="link">
					<el-input v-model="ruleForm.link" placeholder="详情地址" clearable  :readonly="ro.link"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' v-else class="input" label="详情地址" prop="link">
					<el-input v-model="ruleForm.link" placeholder="详情地址" readonly></el-input>
				</el-form-item>
			</template>
			<el-form-item :style='{"padding":"40px 0","margin":"0","alignItems":"center","textAlign":"center","display":"flex","width":"100%","fontSize":"48px","justifyContent":"center"}' class="btn">
				<el-button class="btn3"  v-if="type!='info'" type="success" @click="onSubmit">
					<span class="icon iconfont icon-tijiao16" :style='{"color":"inherit","margin":"0 2px","fontSize":"18px"}'></span>
					提交
				</el-button>
				<el-button class="btn4" v-if="type!='info'" type="success" @click="back()">
					<span class="icon iconfont icon-quxiao09" :style='{"color":"inherit","margin":"0 2px","fontSize":"18px"}'></span>
					取消
				</el-button>
				<el-button class="btn5" v-if="type=='info'" type="success" @click="back()">
					<span class="icon iconfont icon-fanhui01" :style='{"color":"inherit","margin":"0 2px","fontSize":"18px"}'></span>
					返回
				</el-button>
			</el-form-item>
		</el-form>
    

  </div>
</template>
<script>
import { 
	isNumber,
	isIntNumer,
	isURL,
} from "@/utils/validate";
export default {
	data() {
		var validateUrl = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isURL(value)) {
				callback(new Error("请输入正确的URL地址"));
			} else {
				callback();
			}
		};
		var validateNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isNumber(value)) {
				callback(new Error("请输入数字"));
			} else {
				callback();
			}
		};
		var validateIntNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isIntNumer(value)) {
				callback(new Error("请输入整数"));
			} else {
				callback();
			}
		};
		return {
			id: '',
			type: '',
			
			
			ro:{
				title : false,
				cover : false,
				badge : false,
				subtitle : false,
				score : false,
				huashu : false,
				zhuifan : false,
				mediaid : false,
				link : false,
				thumbsupnum : false,
				crazilynum : false,
				discussnum : false,
				storeupnum : false,
			},
			
			
			ruleForm: {
				title: '',
				cover: '',
				badge: '',
				subtitle: '',
				score: '',
				huashu: '',
				zhuifan: '',
				mediaid: '',
				link: '',
			},
		

			
			rules: {
				title: [
				],
				cover: [
				],
				badge: [
				],
				subtitle: [
				],
				score: [
					{ validator: validateNumber, trigger: 'blur' },
				],
				huashu: [
				],
				zhuifan: [
				],
				mediaid: [
				],
				link: [
					{ validator: validateUrl, trigger: 'blur' },
				],
				thumbsupnum: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				crazilynum: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				discussnum: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				storeupnum: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
			}
		};
	},
	props: ["parent"],
	computed: {



	},
    components: {
    },
	created() {
	},
	methods: {
		
		// 下载
		download(file){
			window.open(`${file}`)
		},
		// 初始化
		init(id,type) {
			if (id) {
				this.id = id;
				this.type = type;
			}
			if(this.type=='info'||this.type=='else'){
				this.info(id);
			}else if(this.type=='logistics'){
				this.logistics=false;
				this.info(id);
			}else if(this.type=='cross'){
				var obj = this.$storage.getObj('crossObj');
				for (var o in obj){
						if(o=='title'){
							this.ruleForm.title = obj[o];
							this.ro.title = true;
							continue;
						}
						if(o=='cover'){
							this.ruleForm.cover = obj[o];
							this.ro.cover = true;
							continue;
						}
						if(o=='badge'){
							this.ruleForm.badge = obj[o];
							this.ro.badge = true;
							continue;
						}
						if(o=='subtitle'){
							this.ruleForm.subtitle = obj[o];
							this.ro.subtitle = true;
							continue;
						}
						if(o=='score'){
							this.ruleForm.score = obj[o];
							this.ro.score = true;
							continue;
						}
						if(o=='huashu'){
							this.ruleForm.huashu = obj[o];
							this.ro.huashu = true;
							continue;
						}
						if(o=='zhuifan'){
							this.ruleForm.zhuifan = obj[o];
							this.ro.zhuifan = true;
							continue;
						}
						if(o=='mediaid'){
							this.ruleForm.mediaid = obj[o];
							this.ro.mediaid = true;
							continue;
						}
						if(o=='link'){
							this.ruleForm.link = obj[o];
							this.ro.link = true;
							continue;
						}
						if(o=='thumbsupnum'){
							this.ruleForm.thumbsupnum = obj[o];
							this.ro.thumbsupnum = true;
							continue;
						}
						if(o=='crazilynum'){
							this.ruleForm.crazilynum = obj[o];
							this.ro.crazilynum = true;
							continue;
						}
						if(o=='discussnum'){
							this.ruleForm.discussnum = obj[o];
							this.ro.discussnum = true;
							continue;
						}
						if(o=='storeupnum'){
							this.ruleForm.storeupnum = obj[o];
							this.ro.storeupnum = true;
							continue;
						}
				}
			}
			
		},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `dongmanfanju/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
        //解决前台上传图片后台不显示的问题
        let reg=new RegExp('../../../upload','g')//g代表全部
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {
	if(this.ruleForm.cover!=null) {
		this.ruleForm.cover = this.ruleForm.cover.replace(new RegExp(this.$base.url,"g"),"");
	}
var objcross = this.$storage.getObj('crossObj');
      //更新跨表属性
       var crossuserid;
       var crossrefid;
       var crossoptnum;
       if(this.type=='cross'){
                var statusColumnName = this.$storage.get('statusColumnName');
                var statusColumnValue = this.$storage.get('statusColumnValue');
                if(statusColumnName!='') {
                        var obj = this.$storage.getObj('crossObj');
                       if(statusColumnName && !statusColumnName.startsWith("[")) {
                               for (var o in obj){
                                 if(o==statusColumnName){
                                   obj[o] = statusColumnValue;
                                 }
                               }
                               var table = this.$storage.get('crossTable');
                             this.$http({
                                 url: `${table}/update`,
                                 method: "post",
                                 data: obj
                               }).then(({ data }) => {});
                       } else {
                               crossuserid=this.$storage.get('userid');
                               crossrefid=obj['id'];
                               crossoptnum=this.$storage.get('statusColumnName');
                               crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                        }
                }
        }
		this.$refs["ruleForm"].validate(valid => {
			if (valid) {
				if(crossrefid && crossuserid) {
					this.ruleForm.crossuserid = crossuserid;
					this.ruleForm.crossrefid = crossrefid;
					let params = { 
						page: 1, 
						limit: 10, 
						crossuserid:this.ruleForm.crossuserid,
						crossrefid:this.ruleForm.crossrefid,
					} 
				this.$http({ 
					url: "dongmanfanju/page", 
					method: "get", 
					params: params 
				}).then(({ 
					data 
				}) => { 
					if (data && data.code === 0) { 
						if(data.data.total>=crossoptnum) {
							this.$message.error(this.$storage.get('tips'));
							return false;
						} else {
							this.$http({
								url: `dongmanfanju/${!this.ruleForm.id ? "save" : "update"}`,
								method: "post",
								data: this.ruleForm
							}).then(({ data }) => {
								if (data && data.code === 0) {
									this.$message({
										message: "操作成功",
										type: "success",
										duration: 1500,
										onClose: () => {
											this.parent.showFlag = true;
											this.parent.addOrUpdateFlag = false;
											this.parent.dongmanfanjuCrossAddOrUpdateFlag = false;
											this.parent.search();
											this.parent.contentStyleChange();
										}
									});
								} else {
									this.$message.error(data.msg);
								}
							});

						}
					} else { 
				} 
			});
		} else {
			this.$http({
				url: `dongmanfanju/${!this.ruleForm.id ? "save" : "update"}`,
				method: "post",
			   data: this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$message({
						message: "操作成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.parent.showFlag = true;
							this.parent.addOrUpdateFlag = false;
							this.parent.dongmanfanjuCrossAddOrUpdateFlag = false;
							this.parent.search();
							this.parent.contentStyleChange();
						}
					});
				} else {
					this.$message.error(data.msg);
			   }
			});
		 }
         }
       });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.dongmanfanjuCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
    coverUploadChange(fileUrls) {
	    this.ruleForm.cover = fileUrls;
    },
  }
};
</script>
<style lang="scss" scoped>
	.amap-wrapper {
		width: 100%;
		height: 500px;
	}
	
	.search-box {
		position: absolute;
	}
	
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  	  padding: 0 10px 0 0;
	  	  color: inherit;
	  	  font-weight: 500;
	  	  display: inline-block;
	  	  width: 150px;
	  	  font-size: inherit;
	  	  line-height: 40px;
	  	  text-align: right;
	  	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 150px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  	  border: 1px solid #ccc;
	  	  border-radius: 0px;
	  	  padding: 0 12px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: inherit;
	  	  background: rgba(255, 255, 255,.6);
	  	  width: auto;
	  	  font-size: 16px;
	  	  min-width: 350px;
	  	  height: 40px;
	  	}
	.add-update-preview .el-input-number /deep/ .el-input__inner {
		text-align: left;
	  	  border: 1px solid #ccc;
	  	  border-radius: 0px;
	  	  padding: 0 12px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: inherit;
	  	  background: rgba(255, 255, 255,.6);
	  	  width: auto;
	  	  font-size: 16px;
	  	  min-width: 350px;
	  	  height: 40px;
	  	}
	.add-update-preview .el-input-number /deep/ .el-input-number__decrease {
		display: none;
	}
	.add-update-preview .el-input-number /deep/ .el-input-number__increase {
		display: none;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  	  border: 1px solid #ccc;
	  	  border-radius: 0px;
	  	  padding: 0 10px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: inherit;
	  	  background: rgba(255, 255, 255,.6);
	  	  width: 200px;
	  	  font-size: 16px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  	  border: 1px solid #ccc;
	  	  border-radius: 0px;
	  	  padding: 0 10px 0 30px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: inherit;
	  	  background: rgba(255, 255, 255,.6);
	  	  width: 200px;
	  	  font-size: 16px;
	  	  height: 40px;
	  	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  	  border: 1px solid #ccc;
	  	  cursor: pointer;
	  	  border-radius: 0px;
	  	  color: inherit;
	  	  background: rgba(255, 255, 255,.6);
	  	  object-fit: cover;
	  	  width: 180px;
	  	  font-size: 32px;
	  	  line-height: 90px;
	  	  text-align: center;
	  	  height: 90px;
	  	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  	  border: 1px solid #ccc;
	  	  cursor: pointer;
	  	  border-radius: 0px;
	  	  color: inherit;
	  	  background: rgba(255, 255, 255,.6);
	  	  object-fit: cover;
	  	  width: 180px;
	  	  font-size: 32px;
	  	  line-height: 90px;
	  	  text-align: center;
	  	  height: 90px;
	  	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  	  border: 1px solid #ccc;
	  	  cursor: pointer;
	  	  border-radius: 0px;
	  	  color: inherit;
	  	  background: rgba(255, 255, 255,.6);
	  	  object-fit: cover;
	  	  width: 180px;
	  	  font-size: 32px;
	  	  line-height: 90px;
	  	  text-align: center;
	  	  height: 90px;
	  	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  	  border: 1px solid #ccc;
	  	  border-radius: 0px;
	  	  padding: 12px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: inherit;
	  	  background: rgba(255, 255, 255,.6);
	  	  width: 500px;
	  	  font-size: 16px;
	  	  height: 140px;
	  	}
	
	.add-update-preview .btn .btn1 {
				border: 1px solid #eee;
				cursor: pointer;
				padding: 0 20px;
				margin: 0px 10px;
				color: #333;
				display: inline-block;
				font-size: 16px;
				line-height: 24px;
				transition: all 0s;
				border-radius: 4px;
				outline: none;
				background: none;
				width: auto;
				height: 40px;
			}
	
	.add-update-preview .btn .btn1:hover {
				border: 1px solid #bda75c;
				color: #bda75c;
				background: linear-gradient(180deg, rgba(255,248,216,1) 0%, rgba(231,223,184,1) 100%),#fff;
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn2 {
				border: 1px solid #eee;
				cursor: pointer;
				border-radius: 4px;
				padding: 0 20px;
				margin: 0px 10px;
				color: #333;
				background: none;
				width: auto;
				font-size: 16px;
				line-height: 24px;
				transition: all 0s;
				height: 40px;
			}
	
	.add-update-preview .btn .btn2:hover {
				border: 1px solid #bda75c;
				color: #bda75c;
				background: linear-gradient(180deg, rgba(255,248,216,1) 0%, rgba(231,223,184,1) 100%),#fff;
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn3 {
				border: 1px solid #eee;
				cursor: pointer;
				padding: 0 20px;
				margin: 0px 10px;
				color: #333;
				font-size: 16px;
				line-height: 24px;
				transition: all 0s;
				border-radius: 4px;
				outline: none;
				background: none;
				width: auto;
				height: 40px;
			}
	
	.add-update-preview .btn .btn3:hover {
				border: 1px solid #bda75c;
				transform: skew(0deg, 0deg);
				color: #bda75c;
				background: linear-gradient(180deg, rgba(255,248,216,1) 0%, rgba(231,223,184,1) 100%),#fff;
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn4 {
				border: 1px solid #eee;
				cursor: pointer;
				border-radius: 4px;
				padding: 0 20px;
				margin: 0px 10px;
				color: #333;
				background: none;
				width: auto;
				font-size: 16px;
				line-height: 24px;
				transition: all 0s;
				height: 40px;
			}
	
	.add-update-preview .btn .btn4:hover {
				border: 1px solid #bda75c;
				color: #bda75c;
				background: linear-gradient(180deg, rgba(255,248,216,1) 0%, rgba(231,223,184,1) 100%),#fff;
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn5 {
				border: 1px solid #eee;
				cursor: pointer;
				border-radius: 4px;
				padding: 0 20px;
				margin: 0 10px;
				color: #333;
				background: none;
				width: auto;
				font-size: 16px;
				line-height: 24px;
				height: 40px;
			}
	
	.add-update-preview .btn .btn5:hover {
				border: 1px solid #bda75c;
				color: #bda75c;
				background: linear-gradient(180deg, rgba(255,248,216,1) 0%, rgba(231,223,184,1) 100%),#fff;
				opacity: 0.8;
			}
</style>
