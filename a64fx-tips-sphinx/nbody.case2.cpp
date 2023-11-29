void
case2(const int n, const float eps2, const struct Body body[],
      struct Acceleration acc[], double *rval)
// cf. https://github.com/nitadori/rsqrtCubed/blob/15e154b117347ce506180f18fec0effa7315a8e5/nbody-arm.cpp
{
  float x[n], y[n], z[n], m[n];
#pragma loop norecurrence
  for(int i=0; i<n; i++){
    x[i] = body[i].x;
    y[i] = body[i].y;
    z[i] = body[i].z;
    m[i] = body[i].m;
  }
  for(int i=0; i<n; i++){
    const float xi=body[i].x, yi=body[i].y, zi=body[i].z;
    float ax=0, ay=0, az=0;
    for(int j=0; j<n; j++){
      float dx = xi - x[j];
      float dy = yi - y[j];
      float dz = zi - z[j];
      float r2 = eps2 + dx*dx;
      r2 += dy*dy;
      r2 += dz*dz;
      float ri = 1.f / sqrtf(r2);
      float mri = m[j] * ri;
      float ri2 = ri * ri;
      float mri3 = mri * ri2;
      ax -= mri3 * dx;
      ay -= mri3 * dy;
      az -= mri3 * dz;
    }
    acc[i] = {ax, ay, az};
  }
  return;
}
