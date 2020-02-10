<script>
import { Bar } from "vue-chartjs";
export default {
  extends: Bar,
  mounted() {
    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);

    this.gradient.addColorStop(0, "rgba(255, 248, 0, 0.7)");
    this.gradient.addColorStop(0.5, "rgba(255, 19, 97, 0.7)");
    this.gradient.addColorStop(1, "rgba(68, 16, 122, 0.7)");
    this.gradient.addColorStop(1, "rgba(35, 21, 87, 0.7)");

    this.renderChart(
      {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        datasets: [
          {
            label: "Data One",
            // borderColor: '#FC2525',
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "white",
            backgroundColor: this.gradient,
            data: [40, 39, 10, 40, 39, 80, 40]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>
