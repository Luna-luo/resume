var myChart = echarts.init(document.getElementById('main'));

var option = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 10,
    data: ['Vue', 'React', 'JavaScript', '沟通能力', '静态页面']
  },
  series: [
    {
      name: '能力',
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '30',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        {value: 641, name: 'Vue'},
        {value: 320, name: 'React'},
        {value: 400, name: 'Typescript'},
        {value: 240, name: '静态页面'},
        {value: 962, name: 'JavaScript'}
      ]
    }
  ]
};

myChart.setOption(option)