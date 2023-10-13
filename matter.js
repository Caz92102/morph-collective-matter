<script>
function initSimulation() {
  var Engine = Matter.Engine,
    Render = Matter.Render,
    Events = Matter.Events,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Bodies = Matter.Bodies;

  // create an engine
  var engine = Engine.create(),
    world = engine.world;

  // Get the container element and its dimensions
  var containerElement = document.querySelector(".tag-canvas");
  var containerWidth = containerElement.clientWidth + 2;
  var containerHeight = containerElement.clientHeight + 2;

  // create a renderer
  var render = Render.create({
    element: containerElement,
    engine: engine,
    options: {
      width: containerWidth,
      height: containerHeight,
      pixelRatio: 1,
      background: "transparent",
      border: "none",
      wireframes: false ,
    }
  });

  // create bounds
  var ground = Bodies.rectangle(
    containerWidth / 2 + 160,
    containerHeight + 80,
    containerWidth + 320,
    160,
    { render: { fillStyle: "#000000" }, isStatic: true }
  );
  var wallLeft = Bodies.rectangle(
    -80,
    containerHeight / 2,
    160,
    containerHeight,
    { isStatic: true }
  );
  var wallRight = Bodies.rectangle(
    containerWidth + 80,
    containerHeight / 2,
    160,
    1200,
    { isStatic: true }
  );
  var roof = Bodies.rectangle(
    containerWidth / 2 + 160,
    -80,
    containerWidth + 320,
    160,
    { isStatic: true }
  );

  // object colors & variables
  var tagVideos = "#EDDC8C";
  var videos = "#B3E8F3";
  var abouts = "#4D4D4D";

  var border = 1;
  var radius = 20;

  // create objects

  // tagVideo & design
  var tagSociallistening = Bodies.rectangle(containerWidth / 2 + 100, 300, 138, 42, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/650833d0628374915846188d/65292e509d83e70c72abbc2e_Group%20251.svg",
        xScale: 1,
        yScale: 1,
      }
    }
  });
  var tagGrowthmarketing = Bodies.rectangle(containerWidth / 2 + 60, 200, 138, 66, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
	"https://uploads-ssl.webflow.com/650833d0628374915846188d/65292e4f997559049bbb1af8_Group%20249.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagEcommerce = Bodies.rectangle(containerWidth / 2 + 75, 200, 138, 31, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
         "https://uploads-ssl.webflow.com/650833d0628374915846188d/65292e50364862915ffd4e92_Group%20253.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagKpi = Bodies.rectangle(containerWidth / 2 - 75, 200, 66, 34, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
     "https://uploads-ssl.webflow.com/650833d0628374915846188d/65292e4e7c26ce1cd9c74570_Group%20223.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagConversionoptimization = Bodies.rectangle(
    containerWidth / 2 - 74, 200, 138, 50,
    {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
          "https://uploads-ssl.webflow.com/650833d0628374915846188d/65292e4f7f97d75a75987a31_Group%20248.svg",
          xScale: 1,
          yScale: 1
        }
      }
    }
  );
  var tagCostumerjourney = Bodies.rectangle(containerWidth / 2 + 174, 200, 150, 32, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/650833d0628374915846188d/65292e4fbeb8ced8d08e15f3_Group%20246.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagContentchannel = Bodies.rectangle(containerWidth / 2 - 142, 200, 162, 52, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
     "https://uploads-ssl.webflow.com/650833d0628374915846188d/65292e50a852708cdf0d9aec_Group%20250.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagConsumerbehavior = Bodies.rectangle(containerWidth / 2 - 10, 200, 154, 32, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
        "https://uploads-ssl.webflow.com/650833d0628374915846188d/65292e4ffe4628f37ccdffb3_Group%20247.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  //misc
  var tagSeo = Bodies.rectangle(containerWidth / 2 - 242, 200, 60, 32, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
     "https://uploads-ssl.webflow.com/650833d0628374915846188d/65292e4e71488398156972fc_Group%20218.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagSem = Bodies.rectangle(containerWidth / 2 + 30, 200, 60, 34, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
       "https://uploads-ssl.webflow.com/650833d0628374915846188d/65292e4f264dedce35e0301c_Group%20241.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagAcquisition = Bodies.rectangle(containerWidth / 2, 200, 138, 50, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/650833d0628374915846188d/65292e4f264dedce35e0301c_Group%20241.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagAdvertising = Bodies.rectangle(containerWidth / 2 - 59, 200, 172, 49, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
    "https://uploads-ssl.webflow.com/650833d0628374915846188d/65292e4ed832aae1bf467b36_Group%20233.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagDigitalstrategy = Bodies.rectangle(containerWidth / 2 - 59, 200, 138, 28, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
         "https://uploads-ssl.webflow.com/650833d0628374915846188d/65292e4e5ec19109e2cc63ef_Group%20222.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagCommsplanning = Bodies.rectangle(containerWidth / 2 - 59, 200, 153, 32, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
     "https://uploads-ssl.webflow.com/650833d0628374915846188d/65292e4fb584cf77f8c64c1b_Group%20245.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagCRM = Bodies.rectangle(containerWidth / 2 - 59, 200, 138, 28, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
      "https://uploads-ssl.webflow.com/650833d0628374915846188d/65292e4e9f1800f5040f9c0c_Group%20219.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });

  // add all of the bodies to the world
  World.add(engine.world, [
ground,
wallLeft,
wallRight,
roof,
tagSociallistening,
tagCRM,
tagCommsplanning,
tagDigitalstrategy,
tagAdvertising,
tagAcquisition,
tagSem,
tagSeo,
tagConsumerbehavior,
tagContentchannel,
tagCostumerjourney,
tagConversionoptimization,
tagKpi,
tagEcommerce,
tagGrowthmarketing,
tagSociallistening,
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	
 
  ]);

  // add mouse control
  var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

  World.add(world, mouseConstraint);

  // keep the mouse in sync with rendering
  render.mouse = mouse;

  // Allow page scrolling in matter.js window
  mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
  mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

  // Detect clicks vs. drags
  let click = false;

  document.addEventListener("mousedown", () => (click = true));
  document.addEventListener("mousemove", () => (click = false));
  document.addEventListener("mouseup", () =>
    console.log(click ? "click" : "drag")
  );

  // Create a On-Mouseup Event-Handler
  Events.on(mouseConstraint, "mouseup", function (event) {
    var mouseConstraint = event.source;
    var bodies = engine.world.bodies;
    if (!mouseConstraint.bodyB) {
      for (i = 0; i < bodies.length; i++) {
        var body = bodies[i];
        // Check if clicked or dragged
        if (click === true) {
          if (
            Matter.Bounds.contains(body.bounds, mouseConstraint.mouse.position)
          ) {
            var bodyUrl = body.url;
            console.log("Body.Url >> " + bodyUrl);
            // Hyperlinking feature
            if (bodyUrl != undefined) {
              //window.location.href = bodyUrl;
              window.open(bodyUrl, "_blank");
              console.log("Hyperlink was opened");
            }
            break;
          }
        }
      }
    }
  });

  // run the engine
  Engine.run(engine);

  // run the renderer
  Render.run(render);
}

// Get the container element
var containerElement = document.querySelector(".tag-canvas");

// Create an intersection observer
var observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Initialize the simulation when the element is visible
      initSimulation();

      // Disconnect the observer after triggering the tagSocialstrategie
      observer.disconnect();
    }
  });
}, {});

// Observe the container element
observer.observe(containerElement);

</script>
