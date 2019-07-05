using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularOverview.Model;
using AngularOverview.Services;
using Microsoft.AspNetCore.Mvc;

namespace AngularOverview.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoursesController : ControllerBase
    {
        private readonly CourseService service;
        public CoursesController(CourseService service)
        {
            this.service = service;
        }

        // GET api/values
        [HttpGet]
        public ActionResult<List<Course>> Get()
        {
            return this.service.Get();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Course> Get(string id)
        {
            var course = this.service.Get(id);
            if (course == null)
            {
                return NotFound();
            }

            return course;
        }

        // POST api/values
        [HttpPost]
        public ActionResult<Course> Create(Course course)
        {
            course = this.service.Create(course);

            return CreatedAtRoute("Get", new { id = course.Id }, course);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Update(string id, Course course)
        {
            this.service.Update(id, course);
            return NoContent();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            this.service.Delete(id);
            return NoContent();
        }
    }
}
