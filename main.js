// Create instances of your classes
// Create the loadData and renderData functions - these should use the relevant instance
const api = new APIManager()
api.loadData()
const renderer = new Renderer()


$("#loadData").on("click", function () {
    api.loadData()
})


$("#renderData").on("click", function () {
    renderer.render(api.data)
})




