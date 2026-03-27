// ===== Dữ liệu đầu vào =====
    var data = [
        { name: "A", value: 10 },
        { name: "B", value: 25 },
        { name: "C", value: 15 },
        { name: "D", value: 30 },
        { name: "E", value: 20 }
    ];

    class PVC_BieuDoCot
    {
        constructor (data, colors, width, height, maxX, maxY, border, khoangCachCot, chieuRongCot)
        {
            this.data = data;
            this.colors = colors;
            this.width = width;
            this.height = height;
            this.maxX = maxX;
            this.maxY = maxY;
this.border = border;
this.khoangCachCot = khoangCachCot;
this.chieuRongCot = chieuRongCot;

        }

        render()
        {
            var   svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("width", 600);
svg.setAttribute("height", 300);

document.body.appendChild(svg);
        }
    }

    const svg = document.getElementById("chart");

    const width = svg.clientWidth;
    const height = svg.clientHeight;

    const padding = 30;
    const barWidth = (width - padding * 2) / data.length;

    const maxValue = Math.max(...data.map(d => d.value));

    data.forEach((item, index) => {
        const barHeight = (item.value / maxValue) * (height - padding);

        const x = padding + index * barWidth;
        const y = height - barHeight;

        // ===== Vẽ cột =====
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", x);
        rect.setAttribute("y", y);
        rect.setAttribute("width", barWidth - 10);
        rect.setAttribute("height", barHeight);
        rect.setAttribute("class", "bar");

        // Tooltip đơn giản
        rect.addEventListener("mouseenter", () => {
            rect.setAttribute("fill", "orange");
        });

        rect.addEventListener("mouseleave", () => {
            rect.setAttribute("fill", "steelblue");
        });

        svg.appendChild(rect);

        // ===== Giá trị trên cột =====
        const valueText = document.createElementNS("http://www.w3.org/2000/svg", "text");
        valueText.setAttribute("x", x + (barWidth - 10) / 2);
        valueText.setAttribute("y", y - 5);
        valueText.setAttribute("class", "value");
        valueText.textContent = item.value;

        svg.appendChild(valueText);

        // ===== Label dưới =====
        const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
        label.setAttribute("x", x + (barWidth - 10) / 2);
        label.setAttribute("y", height - 5);
        label.setAttribute("class", "label");
        label.textContent = item.name;

        svg.appendChild(label);
    });
