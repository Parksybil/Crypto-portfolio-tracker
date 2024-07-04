import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './CryptoSolarSystem.css'; // Import the CSS file

const CryptoSolarSystem = ({ portfolio }) => {
    const svgRef = useRef();

    useEffect(() => {
        if (portfolio.length > 0) {
            drawVisualization();
        }
    }, [portfolio]);

    const drawVisualization = () => {
        const width = window.innerWidth * 0.9; // Make it responsive
        const height = window.innerHeight * 0.9; // Make it responsive
        const centerX = width / 2;
        const centerY = height / 2;

        d3.select(svgRef.current).selectAll("*").remove();

        const svg = d3.select(svgRef.current)
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", `0 0 ${width} ${height}`)
            .attr("preserveAspectRatio", "xMidYMid meet");

        const totalValue = portfolio.reduce((acc, token) => acc + token.amount * token.price, 0);

        // Draw sun (total portfolio value)
        const sunRadius = Math.sqrt(totalValue) / 5; // Adjusted to make the sun larger
        svg.append("circle")
            .attr("cx", centerX)
            .attr("cy", centerY)
            .attr("r", sunRadius)
            .attr("fill", "yellow")
            .attr("stroke", "orange");

        svg.append("text")
            .attr("x", centerX)
            .attr("y", centerY)
            .attr("dy", ".35em")
            .attr("text-anchor", "middle")
            .attr("font-size", "16px")
            .attr("font-weight", "bold")
            .text(`$${totalValue.toFixed(2)}`);

        // Calculate orbits
        const orbitRadii = d3.range(portfolio.length).map(i => sunRadius + 50 + i * 50);

        // Draw orbits
        orbitRadii.forEach(radius => {
            svg.append("circle")
                .attr("cx", centerX)
                .attr("cy", centerY)
                .attr("r", radius)
                .attr("fill", "none")
                .attr("stroke", "#ccc")
                .attr("stroke-dasharray", "5,5");
        });

        // Draw and animate planets
        portfolio.forEach((token, index) => {
            const orbitRadius = orbitRadii[index];
            const planetRadius = Math.sqrt(token.amount * token.price) / 10; // Adjusted to make planets smaller

            const planet = svg.append("g")
                .attr("transform", `translate(${centerX},${centerY})`);

            planet.append("circle")
                .attr("r", planetRadius)
                .attr("fill", d3.schemeCategory10[index % 10]);

            // Adjust text positioning based on planet radius
            if (planetRadius > 15) {
                planet.append("text")
                    .attr("y", 0)
                    .attr("dy", ".35em")
                    .attr("text-anchor", "middle")
                    .attr("font-size", "10px")
                    .attr("fill", "white")
                    .text(`$${(token.amount * token.price).toFixed(2)}`);
            } else {
                planet.append("text")
                    .attr("y", -planetRadius - 5)
                    .attr("dy", ".35em")
                    .attr("text-anchor", "middle")
                    .attr("font-size", "10px")
                    .attr("fill", "black")
                    .text(`$${(token.amount * token.price).toFixed(2)}`);
            }

            planet.append("text")
                .attr("y", planetRadius + 15)
                .text(token.name)
                .attr("font-size", "12px")
                .attr("text-anchor", "middle");

            // Orbit animation
            function orbit() {
                planet.transition()
                    .duration(10000 + index * 5000)
                    .attrTween("transform", () => {
                        return (t) => {
                            const angle = 2 * Math.PI * t;
                            const x = orbitRadius * Math.cos(angle);
                            const y = orbitRadius * Math.sin(angle);
                            return `translate(${centerX + x},${centerY + y})`;
                        };
                    })
                    .on("end", orbit);
            }

            orbit();
        });
    };

    return (
        <div className="crypto-solar-system-container">
            <h1 className="headline">Portfolio Visualization</h1>
            <svg ref={svgRef} className="crypto-solar-system-svg"></svg>
            <p>Total Portfolio Value: ${portfolio.reduce((acc, token) => acc + token.amount * token.price, 0).toFixed(2)}</p>
        </div>
    );
};

export default CryptoSolarSystem;
