const actions = {
    updateChartData(context:any, data:any) {
        context.commit('UPDATE_CHART_DATA', data);
    }, 
}

export default actions