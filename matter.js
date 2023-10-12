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
  var tagUiUx = Bodies.rectangle(containerWidth / 2 + 150, 500, 316, 67, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/650833d0628374915846188d/651358639d6813128284a9cc_services-2.svg",
        xScale: 1,
        yScale: 1,
      }
    }
  });
  var tagWordpress = Bodies.rectangle(containerWidth / 2 + 150, 460, 316, 67, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
				"https://uploads-ssl.webflow.com/650833d0628374915846188d/651358639d6813128284a9cc_services-2.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagWebflow = Bodies.rectangle(containerWidth / 2 + 250, 420, 316, 67, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
         "https://uploads-ssl.webflow.com/650833d0628374915846188d/651358639d6813128284a9cc_services-2.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagWhitelevel = Bodies.rectangle(containerWidth / 2 - 75, 380, 316, 67, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
     "https://uploads-ssl.webflow.com/650833d0628374915846188d/651358639d6813128284a9cc_services-2.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  // video
  var tagWebflowgreen = Bodies.rectangle(
    containerWidth / 2 - 74,
    540,
    248,
    56,
    {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
          "https://uploads-ssl.webflow.com/650833d0628374915846188d/651358639d6813128284a9cc_services-2.svg",
          xScale: 1,
          yScale: 1
        }
      }
    }
  );
  var tagSass = Bodies.rectangle(containerWidth / 2 + 174, 490, 316, 67, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/650833d0628374915846188d/651358639d6813128284a9cc_services-2.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagWeb = Bodies.rectangle(containerWidth / 2 - 142, 440, 316, 67, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
     "https://uploads-ssl.webflow.com/650833d0628374915846188d/651358639d6813128284a9cc_services-2.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagStartup = Bodies.rectangle(containerWidth / 2 - 10, 260, 316, 67, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
        "https://uploads-ssl.webflow.com/650833d0628374915846188d/651358639d6813128284a9cc_services-2.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  //misc
  var tagMaintence = Bodies.rectangle(containerWidth / 2 - 242, 420, 316, 67, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
     "https://uploads-ssl.webflow.com/650833d0628374915846188d/651358639d6813128284a9cc_services-2.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagIntegration = Bodies.rectangle(containerWidth / 2 + 60, 380, 316, 67, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
       "https://uploads-ssl.webflow.com/650833d0628374915846188d/651358639d6813128284a9cc_services-2.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagMotion = Bodies.rectangle(containerWidth / 2, 360, 316, 67, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/650833d0628374915846188d/651358639d6813128284a9cc_services-2.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagPay = Bodies.rectangle(containerWidth / 2 - 59, 260, 316, 67, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
    "https://uploads-ssl.webflow.com/650833d0628374915846188d/651358639d6813128284a9cc_services-2.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagGsap = Bodies.rectangle(containerWidth / 2 - 59, 260, 316, 67, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
         "https://uploads-ssl.webflow.com/650833d0628374915846188d/651358639d6813128284a9cc_services-2.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagFigma = Bodies.rectangle(containerWidth / 2 - 59, 260, 316, 67, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
     "https://uploads-ssl.webflow.com/650833d0628374915846188d/651358639d6813128284a9cc_services-2.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagMigration = Bodies.rectangle(containerWidth / 2 - 59, 260, 316, 67, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
      "https://uploads-ssl.webflow.com/650833d0628374915846188d/65271ee82cbf8363b420b9f1_Asset%203.svg",
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
    tagUiUx,
    tagWordpress,
    tagWebflow,
    tagWhitelevel,
    tagWebflowgreen,
    tagSass,
    tagWeb,
    tagStartup,
    tagMaintence,
    tagIntegration,
    tagMotion,
    tagPay,
    tagGsap,
    tagFigma,
    tagMigration,
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
