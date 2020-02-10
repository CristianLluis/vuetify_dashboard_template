<script>
import { Radar } from "vue-chartjs";

export default {
  extends: Radar,
  mounted() {
    this.gradientStroke = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(500, 0, 100, 0);
    this.gradientStroke.addColorStop(0, "#80b6f4");

    this.gradientFill = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(500, 0, 100, 0);
    this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0.2)");

    this.gradientStroke2 = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(500, 0, 100, 0);
    this.gradientStroke2.addColorStop(0, "rgb(255, 154, 158)");

    this.gradientFill2 = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(500, 0, 100, 0);
    this.gradientFill2.addColorStop(0, "rgba(255, 154, 158, 0.2)");

    this.renderChart(
      {
        labels: [
          "Eating",
          "Drinking",
          "Sleeping",
          "Designing",
          "Coding",
          "Cycling",
          "Running"
        ],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: this.gradientFill,
            borderColor: this.gradientStroke,
            pointBackgroundColor: this.gradientStroke,
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: this.gradientStroke,
            data: [65, 59, 90, 81, 56, 55, 40]
          },
          {
            label: "My Second dataset",
            backgroundColor: this.gradientFill2,
            borderColor: this.gradientStroke2,
            pointBackgroundColor: this.gradientStroke2,
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: this.gradientStroke2,
            data: [28, 48, 40, 19, 96, 27, 100]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>
