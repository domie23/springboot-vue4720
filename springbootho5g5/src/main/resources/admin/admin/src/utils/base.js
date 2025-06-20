const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootho5g5/",
            name: "springbootho5g5",
            // 退出到首页链接
            indexUrl: ''
        };
    },
    getProjectName(){
        return {
            projectName: "物流信息管理系统"
        } 
    }
}
export default base
