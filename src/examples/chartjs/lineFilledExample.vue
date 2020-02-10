<script>
import { Line } from "vue-chartjs";
export default {
  extends: Line,
  mounted() {
    this.gradientStroke = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(500, 0, 100, 0);
    this.gradientStroke.addColorStop(0, "#f49080");
    this.gradientStroke.addColorStop(0.5, "#80b6f4");

    this.gradientFill = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(500, 0, 100, 0);
    this.gradientFill.addColorStop(0, "rgba(244, 144, 128, 0.6)");
    this.gradientFill.addColorStop(1, "rgba(128, 182, 244, 0.6)");

    this.renderChart(
      {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "Data",
            borderColor: this.gradientStroke,
            pointBorderColor: this.gradientStroke,
            pointBackgroundColor: this.gradientStroke,
            pointHoverBackgroundColor: this.gradientStroke,
            pointHoverBorderColor: this.gradientStroke,
            pointBorderWidth: 10,
            pointHoverRadius: 10,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            fill: true,
            borderWidth: 4,
            backgroundColor: this.gradientFill,
            data: [100, 120, 150, 170, 180, 170, 160],
            options: {
              animation: {
                easing: "easeInOutBack"
              },
              legend: {
                position: "bottom"
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      fontColor: "rgba(0,0,0,0.5)",
                      fontStyle: "bold",
                      beginAtZero: true,
                      maxTicksLimit: 5,
                      padding: 20
                    },
                    gridLines: {
                      drawTicks: false,
                      display: false
                    }
                  }
                ],
                xAxes: [
                  {
                    gridLines: {
                      zeroLineColor: "transparent"
                    },
                    ticks: {
                      padding: 20,
                      fontColor: "rgba(0,0,0,0.5)",
                      fontStyle: "bold"
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>
