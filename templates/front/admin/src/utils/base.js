const base = {
    get() {
        return {
            url : "http://localhost:8080/django4bp03j2o/",
            name: "django4bp03j2o",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于协同过滤的动漫推荐系统设计与实现"
        } 
    }
}
export default base
