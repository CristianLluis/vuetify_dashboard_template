<script>
import { Line } from "vue-chartjs";
export default {
  extends: Line,
  mounted() {
    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(500, 0, 100, 0);
    this.gradient.addColorStop(0, "#80b6f4");
    this.gradient.addColorStop(1, "#f49080");

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
            borderColor: this.gradient,
            pointBorderColor: this.gradient,
            pointBackgroundColor: this.gradient,
            pointHoverBackgroundColor: this.gradient,
            pointHoverBorderColor: this.gradient,
            pointBorderWidth: 10,
            pointHoverRadius: 10,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            fill: false,
            borderWidth: 4,
            data: [100, 120, 150, 170, 180, 170, 160]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>
