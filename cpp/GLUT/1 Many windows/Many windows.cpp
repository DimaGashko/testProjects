#include <GL/glut.h>
#include <cmath>
#include <ctime>

void renderTriangle(void) {
	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

	glBegin(GL_TRIANGLES);
	glVertex3f(-0.5, -0.5, 0.0);
	glVertex3f(0.0, 0.5, 0.0);
	glVertex3f(0.5, -0.5, 0.0);
	glEnd();

	glutSwapBuffers();
}

int main(int argc, char **argv) {
	glutInit(&argc, argv);
	glutInitDisplayMode(GLUT_DEPTH | GLUT_DOUBLE | GLUT_RGBA);

	for (int i = 0; i < 200; i++) {
		glutInitWindowPosition(rand() % 1300, rand() % 800);
		glutInitWindowSize(250, 250);
		glutCreateWindow("Win");
		glutDisplayFunc(renderTriangle);
	}

	glutMainLoop();

	return 0;
}

