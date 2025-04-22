  document.getElementById('productSelector').addEventListener('change', function () {
    const selectedValue = this.value;
    if (selectedValue) {
      const section = document.getElementById(selectedValue);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });

